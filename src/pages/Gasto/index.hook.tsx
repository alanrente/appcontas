import { useEffect, useState } from "react";

import { Gasto } from "interfaces/Gasto";

import { getFaturas } from "services/gastos";

export function useGasto() {
  const [faturaMes, setFaturaMes] = useState<Gasto[]>([]);

  async function buscarFaturas() {
    const gastos = await getFaturas();

    setFaturaMes(gastos);
  }

  useEffect(() => {
    buscarFaturas();
  }, []);

  return {
    faturaMes,
    gastos: "gastos",
  };
}
