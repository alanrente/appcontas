import { createContext } from "react";
import { useHistory } from "react-router-dom";

import { Button, Divider } from "@material-ui/core";

export const Header = createContext<any>([]);

export function HeaderProvider({ children }: any) {
  const router = useHistory();

  return (
    <Header.Provider value={{}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          padding: ".5rem .2rem",
        }}
        className="header"
      >
        <Button variant="outlined" onClick={() => router.push("/")}>
          Home
        </Button>
        <Button variant="outlined" onClick={() => router.push("/cadastro")}>
          Cadastrar
        </Button>
      </div>
      <Divider />
      {children}
    </Header.Provider>
  );
}
