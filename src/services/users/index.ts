import { User } from "interfaces/User";
import { getBearerToken } from "utils/getBearerToken";
import axios from "axios";

export async function getAllProfiles() {
  const { data } = await axios.get("/profiles", {
    headers: {
      Authorization: getBearerToken(),
    },
  });

  return data as User[];
}
