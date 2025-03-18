import { useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { ButtonStyled } from "components/ButtonStyled";
import { CompraForm } from "components/CompraForm";
import { useCompra } from "./index.hook";

export function Compra() {
  const n = useCompra();

  const [valor, setValor] = useState<number>();

  useEffect(() => {}, []);

  function handleSetCompraComValor(valor?: number) {
    setValor(valor);
  }

  return <div>compras pendentes</div>;
}
