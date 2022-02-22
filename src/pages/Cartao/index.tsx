import { Typography } from "@material-ui/core";

import { Table } from "antd";

import { CartaoForm } from "components/CartaoForm";

import { useCartao } from "./index.hook";

export function Cartao() {
  const { columns, rows, visible, idCartao, setVisible } = useCartao();

  return (
    <>
      <Typography variant="h4">Página Cartão</Typography>
      <Table columns={columns} dataSource={rows} />
      <CartaoForm idCartao={idCartao} visible={visible} onCancel={() => setVisible(false)} />
    </>
  );
}
