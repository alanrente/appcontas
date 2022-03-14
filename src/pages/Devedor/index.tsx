import { useEffect } from "react";

import { Typography } from "@material-ui/core";

import { getDevedores, upsertDevedor } from "../../services/devedores/index";

export function Devedor() {
  async function handleGetDevedores() {
    const data = await getDevedores();

    return data;
  }

  // apagar depois a maneira que está sendo usado o post
  async function handleAdicionarDevedor() {
    const data = await upsertDevedor("teste");

    return data;
  }

  useEffect(() => {
    handleGetDevedores();
    handleAdicionarDevedor();
  }, []);

  return (
    <>
      <Typography variant="h4">Devedor</Typography>
    </>
  );
}
