import { LoginGoogle } from "components/LoginGoogle";
import { useLogin } from "./index.hook";

export function Login() {
  const { message } = useLogin();
  return (
    <>
      <h1>{message}</h1>
      <LoginGoogle />
    </>
  );
}
