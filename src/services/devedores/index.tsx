import { Devedores } from "interfaces/Devedores";
import axios from "axios";

export async function getDevedores() {
  const { data } = await axios.get("/pessoas");

  return data as Devedores[];
}
