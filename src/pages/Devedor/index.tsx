import { Typography } from "@material-ui/core";
import { useDevedor } from "./index.hook";

export function Devedor() {
  const devedores = useDevedor();
  devedores;

  return (
    <>
      <Typography variant="h4">Devedor</Typography>
    </>
  );
}
