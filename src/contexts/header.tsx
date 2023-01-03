import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Divider } from "@material-ui/core";

import { ButtonStyled } from "components/ButtonStyled";

import { Cartao } from "pages/Cartao";
import { Compra } from "pages/Compra";
import { Devedor } from "pages/Devedor";
import { Gasto } from "pages/Gasto";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { TypeSession } from "interfaces/TypesSessions";

export const HeaderContext = createContext<any>([]);

export type ButtonRoute = {
  text: string;
  uri: string;
  component: () => JSX.Element;
};

export function HeaderProvider({ children }: any) {
  const history = useHistory();

  const [usuario] = useState(() => {
    const hasUserInSession = !!sessionStorage.getItem(TypeSession.keyUser);

    if (hasUserInSession) {
      history.push("/home");
      return true;
    }

    return false;
  });

  const buttonRoutes: ButtonRoute[] = [
    { text: "Home", uri: "/home", component: () => <Home /> },
    { text: "Devedores", uri: "/devedores", component: () => <Devedor /> },
    { text: "Cartões", uri: "/cartoes", component: () => <Cartao /> },
    { text: "Gastos", uri: "/gastos", component: () => <Gasto /> },
    { text: "Compras", uri: "/compras", component: () => <Compra /> },
  ];

  return (
    <HeaderContext.Provider value={{ buttonRoutes }}>
      {!usuario ? (
        <Login />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: ".5rem",
              padding: ".5rem .2rem",
            }}
            className="header"
          >
            {buttonRoutes
              .filter((route) => route.uri !== "/")
              .map((route: ButtonRoute) => (
                <ButtonStyled content={route.text} onClick={() => history.push(route.uri)} />
              ))}
          </div>
          <Divider />
          {children}
        </>
      )}
    </HeaderContext.Provider>
  );
}
