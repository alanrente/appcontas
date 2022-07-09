import { Gasto } from "interfaces/Gasto";

import axios from "axios";
export async function getFaturas() {
  const { data } = await axios.get("/gastos/fatura-mes");

  const cartoes: Gasto[] = data;

  return cartoes;
}
