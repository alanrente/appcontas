import { useHistory } from "react-router-dom";

export function useLogin() {
  const router = useHistory();

  function clickButton(uri: string) {
    router.push(uri);
  }

  return { message: "Faça Login com uma conta do Google", clickButton };
}
