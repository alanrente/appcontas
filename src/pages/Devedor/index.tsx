import { useEffect } from "react";

import { Typography } from "@material-ui/core";

import { getDevedores } from "../../services/devedores/index";

export function Devedor() {
  async function handleGetDevedores() {
    const data = await getDevedores();

    return data;
  }

  useEffect(() => {
    handleGetDevedores();
  }, []);

  return (
    <>
      <Typography variant="h4">Devedor</Typography>
    </>
  );
}
