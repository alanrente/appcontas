import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useSomatorioContext } from "../hooks/useSomatorioContext"

export function Home(){
  const { somatorio } = useSomatorioContext()

  const router = useHistory();

  return(
    <>
      Hello
      Somatorio: { somatorio }
      <Button onClick={() => router.push("/cadastro")}>Cadastrar</Button>
    </>
  )
}