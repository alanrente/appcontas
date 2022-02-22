import { useEffect, useState } from "react";

import { obterCartoes } from "services/cartoes";

export function useCartao() {
  const [visible, setVisible] = useState(false);
  const [idCartao, setIdCartao] = useState<any>();

  const [columns, setColumns] = useState<any[]>([]);

  const [rows, setRows] = useState<any[]>([]);

  async function handleLoadCartoes() {
    const data = await obterCartoes();

    if (!data) return;

    const newColumns: any[] = Object.keys(data[0])
      .filter((item) => item !== "id")
      .map((item) => ({
        title: item,
        dataIndex: item,
        key: item,
      }));

    newColumns.push({
      title: "Ações",
      key: "acoes",
      render: (record: any) => (
        <a
          onClick={() => {
            setIdCartao(record.id);
            setVisible(true);
          }}
        >
          Editar
        </a>
      ),
    });

    const newRows = data.map((item: any) => ({ ...item, action: "" }));

    setColumns(newColumns);
    setRows(newRows);
  }

  useEffect(() => {
    handleLoadCartoes();
  }, []);

  return {
    visible,
    setVisible,
    columns,
    rows,
    idCartao,
  };
}
