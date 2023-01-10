import { getBearerToken } from "utils/getBearerToken";
import axios, { AxiosRequestConfig } from "axios";

export async function obterCartoes() {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `/cartoes`,
    headers: {
      Authorization: getBearerToken(),
    },
  };

  const { data } = await axios.request(options);

  return data;
}

export async function obterUmCartao(id: number) {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `/cartoes/${id}`,
    headers: {
      accept: "*/*",
      "content-type": "application/json",
    },
  };

  const { data } = await axios.request(options);

  return data;
}
