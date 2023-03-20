import { Compra } from "interfaces/Compra";
import axios from "axios";

export async function getCompras() {
  return await axios
    .get("/novo-gastos/compras")
    .then(({ data }) => data as any[])
    .catch((err) => [err] as any[]);
}

export async function getLancamentos() {
  return await axios
    .get("/novo-gastos")
    .then(({ data }) => data as any[])
    .catch((err) => [err] as any[]);
}

export async function postNovaCompra(novaCompra: Compra) {
  return await axios.post("/novo-gastos", novaCompra);
}
