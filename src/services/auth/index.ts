import axios from "axios";

export async function googleAuth(username: string, googleUid: string) {
  const user = await axios
    .post("/auth/login", { username, googleUid })
    .then(({ data: token, status }) => ({
      token,
      status,
    }))
    .catch((err) => {
      alert(err.message);
    });

  return user;
}
