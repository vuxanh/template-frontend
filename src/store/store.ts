import { create } from "zustand";

interface StoreApi {
  data: any;
  add: (key: string, data: any) => void;
}

const data = {};

const updateAtKey = (obj: any, keys: string[], data: any) => {
  const index = keys.length - 1;
  if (index === 0) {
    obj[keys[index]] = data;
  } else {
    updateAtKey(obj[keys[index]], keys.slice(1), data);
  }
};

const getDataAtKey = <T>(obj: any, keys: string[]): any => {
  const index = keys.length - 1;
  if (index === 0) {
    return obj[keys[index]] as T;
  }
  return getDataAtKey(obj[keys[index]], keys.slice(1));
};

export const useApiStore = create<StoreApi>((set) => ({
  data: data,
  add: (key: string, data: any) =>
    set((state) => {
      const newState = { ...state };
      updateAtKey(newState, key.split("."), data);
      return newState;
    }),
}));

const useApiSelector = <T>(key: string) => {
  const storeData = { data };
  return getDataAtKey<T>(storeData, key.split("."));
};

export default {
  get: useApiSelector,
};
