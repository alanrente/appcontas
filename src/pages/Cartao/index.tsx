import { Typography } from "@material-ui/core";

import { Card } from "components/Card";
import { CartaoForm } from "components/CartaoForm";
// import { CartaoForm } from "components/CartaoForm";

import { useCartao } from "./index.hook";
import { ContainerCartao, SectionCartao } from "./index.styled";

export function Cartao() {
  const { visible, setVisible, cartoes, handleOpenModal, cartaoToOpen } = useCartao();

  return (
    <>
      <Typography variant="h6">Visualize os cartões cadastrados</Typography>
      <ContainerCartao>
        <SectionCartao>
          <button className="btn-addCartao" onClick={() => handleOpenModal()}>
            Adicionar Cartão
          </button>
          {cartoes &&
            cartoes.map((cartao, i) => (
              <>
                {/* <StyledCartao onClick={() => handleOpenModal(cartao.id)}>{cartao.bank}</StyledCartao> */}
                <Card key={`${i}`} onClick={() => handleOpenModal(cartao)} cartao={cartao} />
              </>
            ))}
        </SectionCartao>
      </ContainerCartao>
      <CartaoForm onCancel={() => setVisible(false)} visible={visible} cartao={cartaoToOpen} />
    </>
  );
}
