import { useGasto } from "./index.hook";

export function Gasto() {
  const { gastos } = useGasto();

  return <>Pagina gasto {gastos}</>;
}
