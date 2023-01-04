import { Typography } from "@material-ui/core";

import { Card } from "components/Card";
import { CartaoForm } from "components/CartaoForm";

import { useCartao } from "./index.hook";
import { ContainerCartao, SectionCartao } from "./index.styled";

export function Cartao() {
  const { visible, setVisible, cartoes, handleOpenModal, idCartao } = useCartao();

  return (
    <>
      <Typography variant="h6">Visualize os cartões cadastrados</Typography>
      <ContainerCartao>
        <SectionCartao>
          {cartoes &&
            cartoes.map((cartao, i) => (
              <>
                {/* <StyledCartao onClick={() => handleOpenModal(cartao.id)}>{cartao.bank}</StyledCartao> */}
                <Card key={`${i}`} onClick={() => handleOpenModal(cartao.id || 0)} cartao={cartao} />
              </>
            ))}
        </SectionCartao>
      </ContainerCartao>
      <CartaoForm idCartao={idCartao} visible={visible} onCancel={() => setVisible(false)} />
    </>
  );
}
