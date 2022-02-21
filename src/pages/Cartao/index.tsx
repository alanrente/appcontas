import { Typography } from "@material-ui/core";

import { useCartao } from "./index.hook";

export function Cartao() {
  const { handleLoadCartoes } = useCartao();

  handleLoadCartoes();
  return (
    <>
      <Typography variant="h4">Página Cartão</Typography>
    </>
  );
}
