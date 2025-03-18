import { Typography } from "@material-ui/core";
import { Alert } from "antd";
import { useHeaderContext } from "hooks/useHeaderContext";

export function Home() {
  const { user } = useHeaderContext();
  return (
    <>
      <Typography variant="h4">{`Seja bem vindo ${user.user}!`}</Typography>
      {user.profile.role == "none" ? (
        <Alert showIcon type="warning" message="Aguarde até que o administrador relacione um perfil para você" />
      ) : (
        ""
      )}
    </>
  );
}
