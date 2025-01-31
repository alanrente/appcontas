import { useEffect, useState } from "react";

import { ColumnsType } from "antd/lib/table";
import { GastoMapped } from "interfaces/Gasto";

import { getFaturas } from "services/gastos";

interface ColumnsGastos {
  title: string;
  dataIndex: string;
  key: string;
}

export function useGasto() {
  const [faturaMes, setFaturaMes] = useState<GastoMapped[]>([]);
  const [columns, setColumns] = useState<ColumnsType>([]);

  async function buscarFaturas() {
    const gastos = await getFaturas();

    const newGastos = gastos.map((gasto) => {
      const { pessoa, cartao, valor, parcelas, ...resto } = gasto;
      return {
        cartao: cartao.nome,
        pessoa: pessoa.nome,
        valor: valor,
        parcelas,
        ...resto,
        data_cadastro: new Date(resto.data_cadastro).toLocaleDateString(),
        data_compra: new Date(resto.data_compra).toLocaleDateString(),
      };
    });

    const columns: ColumnsGastos[] = Object.keys(newGastos[0])
      .map((key) => ({
        title: key.replace("_", " "),
        dataIndex: key,
        key,
        textWrap: "word-break",
      }))
      .filter((column) => !column.key.includes("id"));

    setColumns(columns);

    setFaturaMes(newGastos);
  }

  useEffect(() => {
    buscarFaturas();
  }, []);

  return {
    faturaMes,
    columns,
  };
}
