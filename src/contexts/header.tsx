import { createContext } from "react";
import { useHistory } from "react-router-dom";

import { Button, Divider } from "@material-ui/core";

import { Gasto } from "pages/Gasto";

import { Cartao } from "../pages/Cartao";
import { Devedor } from "../pages/Devedor";
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
          <Button variant="outlined" onClick={() => router.push(route.uri)}>
            {route.text}
          </Button>
        ))}
      </div>
      <Divider />
      {children}
    </HeaderContext.Provider>
  );
}
