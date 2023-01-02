import { createContext } from "react";
import { useHistory } from "react-router-dom";

import { Divider } from "@material-ui/core";

import { ButtonStyled } from "components/ButtonStyled";

import { Cartao } from "../pages/Cartao";
import { Compra } from "../pages/Compra";
import { Devedor } from "../pages/Devedor";
import { Gasto } from "../pages/Gasto";

import { Home } from "../pages/Home";

export const HeaderContext = createContext<any>([]);

export type ButtonRoute = {
  text: string;
  uri: string;
  component: () => JSX.Element;
};

export function HeaderProvider({ children }: any) {
  const router = useHistory();

  const buttonRoutes: ButtonRoute[] = [
    { text: "Home", uri: "/", component: () => <Home /> },
    { text: "Devedores", uri: "/devedores", component: () => <Devedor /> },
    { text: "Cartões", uri: "/cartoes", component: () => <Cartao /> },
    { text: "Gastos", uri: "/gastos", component: () => <Gasto /> },
    { text: "Compras", uri: "/compras", component: () => <Compra /> },
  ];

  return (
    <HeaderContext.Provider value={{ buttonRoutes }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          padding: ".5rem .2rem",
        }}
        className="header"
      >
        {buttonRoutes.map((route: ButtonRoute) => (
          <ButtonStyled content={route.text} onClick={() => router.push(route.uri)} />
        ))}
      </div>
      <Divider />
      {children}
    </HeaderContext.Provider>
  );
}
