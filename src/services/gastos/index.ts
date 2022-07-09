import axios from "axios";
export async function getFaturas() {
  const { data } = await axios.get("/gastos/fatura-mes");

  return data;
}
