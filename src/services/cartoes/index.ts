import axios, { AxiosRequestConfig } from "axios";

export async function obterCartoes() {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `/cartoes`,
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
  };

  const { data } = await axios.request(options);

  return data;
}