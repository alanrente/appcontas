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
    const data = await obterCartoes();

    console.log(data);

    const tempCartao: Cartao[] = [
      {
        id: 5005,
        bank: "bradesco",
        final_number: "1234",
        vencimento: "2020-05-20",
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
