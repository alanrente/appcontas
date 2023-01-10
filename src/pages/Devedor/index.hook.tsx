import { useEffect } from "react";
import { getDevedores } from "services/devedores";

export function useDevedor() {
  async function handleGetDevedores() {
    const data = await getDevedores();

    return data;
  }

  useEffect(() => {
    handleGetDevedores();
  }, []);
}
