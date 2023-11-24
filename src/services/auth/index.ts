import axios from "axios";

export async function googleAuth(username: string, googleUid: string) {
  const user = await axios
    .post("/auth/login", { username, googleUid })
    .then(({ data: token, status }) => ({
      token,
      status,
    }))
    .catch((err) => {
      console.log("googleAuth error:", err);
    });

  if (!user) return;

  const { data: profile } = await axios.get("/profile", {
    headers: {
      Authorization: `Bearer ${user?.token?.access_token}`,
    },
  });

  const userWithProfile = { ...user, profile };

  return userWithProfile;
}
