import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const get = <T>({ path, config }: { path: string; config?: AxiosRequestConfig }) => {
  return axiosInstance.get<T>(path, config);
};

const post = ({ path, config }: { path: string; config?: AxiosRequestConfig }) => {
  return axiosInstance.post(path, config);
};

export const api = {
  get: get,
  post: post,
};
