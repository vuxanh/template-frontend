import { create } from "zustand";

interface StoreApi {
  data: any;
  add: (data: any) => void;
}

const updateAtKey = (obj: any, keys: string[], data: any) => {
  const index = keys.length - 1;

  if (index === 0) {
    obj[keys[index]] = data;
  } else {
    updateAtKey(obj[keys[index]], keys.slice(1), data);
  }
};

const getDataAtKey = <T>(obj: any, keys: string[]): any => {
  if (keys.length === 1) {
    return obj?.[keys[0]] as T;
  }
  return getDataAtKey(obj?.[keys[0]], keys.slice(1));
};

export const useApiStore = create<StoreApi>((set) => ({
  data: {},
  add: (data: any) =>
    set((state) => {
      const newState = { ...state };
      newState.data = data;
      return newState;
    }),
}));

export default {
  useDataSelector: <T>(key: string) => useApiStore((state) => getDataAtKey<T>(state.data, key.split("."))),
};
