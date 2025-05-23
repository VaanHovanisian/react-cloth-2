import { axiosInstance } from "../services/instance";

export const fetcher = (url) => axiosInstance.get(url).then(res => res.data)