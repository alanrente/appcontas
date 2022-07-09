import style from "./Gasto.module.scss";
import { useGasto } from "./index.hook";

export function Gasto() {
  const { faturaMes } = useGasto();

  return (
    <>
      <div
        // TODO: passar parar scss
        style={{
          marginTop: "25px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1em",
        }}
      >
        {faturaMes.map(({ pessoa, cartao, data_compra, descricao, valor, parcelas }) => (
          <div
            // TODO: transformar em um component
            style={{
              width: "300px",
              padding: "8px",
              border: "solid 2px",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "0.2em",
            }}
          >
            <div className={style.header}>{pessoa}</div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <span>Cartão: {cartao}</span>
              <span>Compra: {data_compra}</span>
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <span>Valor: R$ {String(valor.toFixed(2)).replace(".", ",")}</span>
              <span>Parcela: {parcelas}</span>
            </div>

            <div className={style.descricao}>{descricao}</div>
          </div>
        ))}
      </div>
    </>
  );
}
