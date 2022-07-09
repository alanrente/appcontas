import { useEffect } from "react";

import { getFaturas } from "services/gastos";

export function useGasto() {
  async function buscarFaturas() {
    await getFaturas();
  }

  useEffect(() => {
    buscarFaturas();
  }, []);

  return {
    gastos: "gastos",
  };
}
