import { BiEdit } from "react-icons/bi";
import { ContainerScrolable } from "components/ContainerScrolable";
import { useDevedor } from "./index.hook";

export function Devedor() {
  const { pessoas } = useDevedor();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(0.68 * var(--HMain))",
      }}
    >
      <ContainerScrolable>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            padding: "0.5rem 0",
          }}
        >
          {pessoas &&
            pessoas.map((pessoa, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "65%",
                  border: "solid 1px",
                  borderRadius: "25px",
                  padding: "0 .5rem",
                  fontWeight: "bold",
                }}
              >
                <label>{pessoa.nome}</label>
                <BiEdit />
              </div>
            ))}
        </div>
      </ContainerScrolable>
    </div>
  );
}
