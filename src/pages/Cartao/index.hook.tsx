import { useEffect, useState } from "react";

import { Cartao } from "interfaces/Cartao";

import { obterCartoes } from "services/cartoes";

export function useCartao() {
  const [visible, setVisible] = useState(false);
  const [cartoes, setCartoes] = useState<Cartao[]>([]);
  const [idCartao, setIdCartao] = useState<number>(NaN);

  function handleOpenModal(idCartao: number) {
    setVisible(true);
    setIdCartao(idCartao);
  }

  async function handleLoadCartoes() {
    const data: Cartao[] = await obterCartoes();

    console.log(data);

    const tempCartao: Cartao[] = [
      {
        id: 5005,
        nome: "bradesco",
        final_numero: "1234",
        dia_vencimento: 20,
      },
    ];

    setCartoes(data || tempCartao);
  }

  useEffect(() => {
    handleLoadCartoes();
  }, []);

  return {
    cartoes,
    handleOpenModal,
    idCartao,
    setVisible,
    visible,
  };
}
