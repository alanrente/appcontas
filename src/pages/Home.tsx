import { Typography } from "@material-ui/core";

import { LoginGoogle } from "components/LoginGoogle";

export function Home() {
  return (
    <>
      <Typography variant="h4">Seja bem vindo ao sistema de cadastro de devedores.</Typography>
      <LoginGoogle />
    </>
  );
}
