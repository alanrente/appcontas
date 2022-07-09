import { Cartao } from "interfaces/Cartao";

import { NumberCard, StyledCard } from "./styled";

interface Prop {
  onClick: () => void;
  children?: any;
  cartao: Cartao;
}

export function Card({ onClick, children, cartao }: Prop) {
  function handleOnClick() {
    console.log(cartao);
    onClick();
  }

  // function handleFormatDate(date: string) {
  //   console.log(date);
  //   const [year, month, day] = date.split("-");

  //   return `${day}/${month}/${year}`;
  // }

  return (
    <StyledCard onClick={handleOnClick}>
      {children}
      <label>Cartão: {cartao.nome}</label>
      <NumberCard>XXXX.XXXX.XXXX.{cartao.final_numero}</NumberCard>
      {/* <label>vencimento: {handleFormatDate(cartao.vencimento)}</label> */}
    </StyledCard>
  );
}
