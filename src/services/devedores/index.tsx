import axios, { AxiosRequestConfig } from "axios";

/* eslint-disable no-console */
export async function getDevedores() {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${process.env.REACT_APP_API_URL || "http://localhost:3000/api"}/devedores`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.request(options);

  console.log(data);
}

export async function upsertDevedor(devedor: string) {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: `${process.env.REACT_APP_API_URL || "http://localhost:3000/api"}/devedores`,
    data: { nome: devedor },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.request(options);

  console.log(data);
}
