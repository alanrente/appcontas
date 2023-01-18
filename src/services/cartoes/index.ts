import { getBearerToken } from "utils/getBearerToken";
import axios, { AxiosRequestConfig } from "axios";
import { useLoginGoogle } from "components/LoginGoogle/index.hook";

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

  try {
    const { data } = await axios.request(options);

    return data;
  } catch (err) {
    const { logout } = useLoginGoogle();

    logout();
  }
}
