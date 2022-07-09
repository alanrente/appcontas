import axios from "axios";

export async function getDevedores() {
  const { data } = await axios.get("/pessoas");

  console.log(data);
}
