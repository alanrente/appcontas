import { useEffect, useState } from "react";

import { obterCartoes } from "services/cartoes";

export function useCartao() {
  const [visible, setVisible] = useState(false);
  const [cartoes, setCartoes] = useState<any[]>([]);

  async function handleLoadCartoes() {
    const data = await obterCartoes();

    if (!data) return;

    setCartoes(data);
  }

  useEffect(() => {
    handleLoadCartoes();
  }, []);

  return {
    visible,
    setVisible,
    cartoes,
  };
}
