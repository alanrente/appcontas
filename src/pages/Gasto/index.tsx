// import { ContainerScrolable } from "components/ContainerScrolable";
import { Table } from "antd";
import style from "./Gasto.module.scss";
import { useGasto } from "./index.hook";

export function Gasto() {
  const { faturaMes, columns } = useGasto();

  return (
    <Table
      className={style.tabela}
      size="small"
      dataSource={faturaMes.map(({ id, ...fat }) => ({ key: id, ...fat }))}
      columns={columns as any}
      scroll={{ x: "calc(700px + 50%)", y: "calc(0.6 * var(--HMain))" }}
    />
  );
}
