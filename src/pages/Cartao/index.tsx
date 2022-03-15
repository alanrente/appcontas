import { useState } from "react";

import { Typography } from "@material-ui/core";

import { CartaoForm } from "components/CartaoForm";

import { useCartao } from "./index.hook";
import { ContainerCartao, SectionCartao, StyledCartao } from "./index.styled";

export function Cartao() {
  const { visible, setVisible, cartoes } = useCartao();
  const [idCartao, setIdCartao] = useState<number>(NaN);

  function handleOpenModal(idCartao: number) {
    setVisible(true);
    setIdCartao(idCartao);
  }

  return (
    <>
      <Typography variant="h6">Visualize os cartões cadastrados</Typography>
      <ContainerCartao>
        <SectionCartao>
          {cartoes &&
            cartoes.map((cartao) => (
              <>
                <StyledCartao onClick={() => handleOpenModal(cartao.id)}>{cartao.bank}</StyledCartao>
                <StyledCartao onClick={() => handleOpenModal(cartao.id)}>{cartao.bank}</StyledCartao>
                <StyledCartao onClick={() => handleOpenModal(cartao.id)}>{cartao.bank}</StyledCartao>
              </>
            ))}
        </SectionCartao>
      </ContainerCartao>
      <CartaoForm idCartao={idCartao} visible={visible} onCancel={() => setVisible(false)} />
    </>
  );
}
