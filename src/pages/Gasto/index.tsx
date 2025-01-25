// import { ContainerScrolable } from "components/ContainerScrolable";
import { Table } from "antd";
import style from "./Gasto.module.scss";
import { useGasto } from "./index.hook";

export function Gasto() {
  const { faturaMes, columns } = useGasto();

  return (
    <Table
      className={style.tabela}
      size="middle"
      dataSource={faturaMes.map(({ id, ...fat }) => ({ key: id, ...fat }))}
      columns={columns as any}
      scroll={{ x: "calc(700px + 50%)", y: "calc(0.6 * var(--HMain))" }}
    />
    // <ContainerScrolable
    //   {...{
    //     className: style.tabela,
    //   }}
    // >
    //   <table>
    //     <thead>
    //       <tr>
    //         {faturaMes.length > 0 &&
    //           Object.keys(faturaMes[0])
    //             .filter((key) => !key.includes("id"))
    //             .map((key) => (
    //               <th
    //                 style={{
    //                   width: key === "descricao" ? "250px" : "",
    //                 }}
    //                 className={style["header-table"]}
    //                 key={key}
    //               >
    //                 {key.replace("_", " ")}
    //               </th>
    //             ))}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {faturaMes.map((fatura: any) => (
    //         <tr key={fatura.id}>
    //           {faturaMes &&
    //             Object.keys(fatura)
    //               .filter((key) => !key.includes("id"))
    //               .map((key) => <td key={key}>{fatura[key]}</td>)}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </ContainerScrolable>
  );
}
