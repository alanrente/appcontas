import React from "react";

import { Cartao } from "interfaces/Cartao";

import { NumberCard, StyledCard } from "./styled";

interface Prop {
  onClick: () => void;
  children?: any;
  cartao: Cartao;
}

export function Card({ onClick, children, cartao }: Prop) {
  function handleOnClick() {
    onClick();
  }

  function handleFormatDate(date: string) {
    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
  }

  return (
    <StyledCard onClick={handleOnClick}>
      {children}
      <label>Cartão: {cartao.bank.toUpperCase()}</label>
      <NumberCard>XXXX.XXXX.XXXX.{cartao.final_number}</NumberCard>
      <label>vencimento: {handleFormatDate(cartao.vencimento)}</label>
    </StyledCard>
  );
}
