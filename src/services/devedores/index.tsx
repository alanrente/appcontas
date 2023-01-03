import { Devedores } from "interfaces/Devedores";
import { getBearerToken } from "utils/getBearerToken";
import axios from "axios";

export async function getDevedores() {
  const { data } = await axios.get("/pessoas", {
    headers: {
      Authorization: getBearerToken(),
    },
  });

  return data as Devedores[];
}
