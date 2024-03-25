import { useEffect, useState } from "react";
import { api } from "../api/api";
import store, { useApiStore } from "../store/store";

export const useData = <T = any>(storePath: string, url?: string) => {
  const [data, setData] = useState<T>();
  const { add } = useApiStore();
  const storeData = store.useDataSelector<T>(storePath);

  useEffect(() => {
    if (storeData != null || storePath.includes(".")) {
      setData(storeData);
    } else {
      const _url = url ?? `/${storePath}`;

      api.get<T>({ path: _url }).then(({ data }) => {
        add(data);
        setData(data);
      });
    }
  }, [add, storePath, url, storeData]);

  return data;
};
