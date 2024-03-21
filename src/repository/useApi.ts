import { useEffect, useState } from "react";
import { api } from "../api/api";
import store, { useApiStore } from "../store/store";

export const useApi = <T = any>(storePath: string, url?: string) => {
  console.log("called");

  const [data, setData] = useState<T>();
  const { add } = useApiStore();

  useEffect(() => {
    const storeData = store.get<T>(storePath);
    if (storeData != null) return storeData;

    api.get<T>({ path: url ?? "" }).then(({ data }) => {
      add(storePath, data);
      setData(data);
    });
  }, [add, storePath, url]);

  return data;
};
