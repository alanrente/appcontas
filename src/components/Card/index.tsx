import { Cartao } from "interfaces/Cartao";

import { NumberCard, StyledCard } from "./styled";

interface Prop {
  // eslint-disable-next-line no-unused-vars
  onClick: (cartao?: any) => void;
  children?: any;
  cartao: Cartao;
}

export function Card({ onClick, children, cartao }: Prop) {
  function handleOnClick() {
    onClick(cartao);
  }

  return (
    <StyledCard onClick={handleOnClick}>
      {children}
      <label>Cartão: {cartao.nome}</label>
      <NumberCard>XXXX.XXXX.XXXX.{cartao.final_numero}</NumberCard>
      {/* <label>vencimento: {handleFormatDate(cartao.vencimento)}</label> */}
    </StyledCard>
  );
}
