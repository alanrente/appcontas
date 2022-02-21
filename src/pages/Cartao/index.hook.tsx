import { obterCartoes } from "../../services/cartoes";

export function useCartao() {
  async function handleLoadCartoes() {
    // eslint-disable-next-line no-console
    console.log(await obterCartoes());
  }

  return {
    handleLoadCartoes,
  };
}
