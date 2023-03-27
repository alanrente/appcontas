import { useState } from "react";

import { getCompras, getLancamentos } from "services/compras";

export function useCompra() {
  const [lancamentos, setLancamentos] = useState<any[]>([]);
  const [compras, setCompras] = useState<any[]>([]);
  const [visibleFormCompras, setVisibleFormCompras] = useState(false);

  async function handleGetLancamentos() {
    const _lancamentos = await getLancamentos();

    if (!_lancamentos) return setLancamentos([]);

    setLancamentos(_lancamentos);
    console.log("_lancamentos", _lancamentos);
  }

  async function handleGetCompras() {
    const _compras = await getCompras();

    if (!_compras) return setCompras([]);

    setCompras(_compras);
  }

  return {
    handleGetCompras,
    handleGetLancamentos,
    lancamentos,
    compras,
    visibleFormCompras,
    setVisibleFormCompras,
  };
}
