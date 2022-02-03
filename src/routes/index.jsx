import { Route } from "react-router-dom";
import { FormCadastro } from "../components/FormCadastro";
import { Home } from "../pages/Home";

export default function Routes() {
  return (
    <>
      <Route path="/" exact component={Home}/>
      <Route path="/cadastro" component={FormCadastro} />
    </>
  
  )
}