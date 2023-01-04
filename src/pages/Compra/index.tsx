import { useEffect } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { ButtonStyled } from "components/ButtonStyled";
import { CompraForm } from "components/CompraForm";
import { useCompra } from "./index.hook";

export function Compra() {
  const {
    compras,
    handleGetCompras,
    // lancamentos: compras,
    handleGetLancamentos,
    visibleFormCompras,
    setVisibleFormCompras,
  } = useCompra();

  useEffect(() => {
    handleGetCompras();
    handleGetLancamentos();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <h1>Page Compra</h1>
        <ButtonStyled content="Novo" onClick={() => setVisibleFormCompras(true)} icon={<HiOutlinePlus />} />
      </div>
      <label>Compras:</label>
      {compras &&
        compras.map((compra: any) => (
          <li
            style={{
              listStyleType: "none",
            }}
          >
            <p>
              Valor: {compra.valor}; Parcelas: {compra.parcelas}; Data: {compra.data_compra.split("-")[2]}/
              {compra.data_compra.split("-")[1]}/{compra.data_compra.split("-")[0]}; Pessoa:{" "}
              {`${compra.pessoa}`.toLowerCase()}; Cartão: {compra.cartao}
              {compra.numero ? ` (${compra.numero});` : ";"}
            </p>
            {/* <p>{`${JSON.stringify(compra)}`}</p> */}
          </li>
        ))}
      <CompraForm visible={visibleFormCompras} onCancel={() => setVisibleFormCompras(false)} />
    </>
  );
}
