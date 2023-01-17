import { useEffect, useState } from "react";
import { Devedores } from "interfaces/Devedores";
import { getDevedores } from "services/devedores";

export function useDevedor() {
  const [pessoas, setPessoas] = useState<Devedores[]>([]);

  async function handleGetDevedores() {
    const data = await getDevedores();

    setPessoas(data);
  }

  useEffect(() => {
    handleGetDevedores();
  }, []);

  return {
    pessoas,
  };
}
