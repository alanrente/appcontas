import { createContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaFileInvoiceDollar, FaMoneyBillWaveAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { Divider } from "@material-ui/core";

import { TypeSession } from "interfaces/TypesSessions";
import CardsImg from "static/svgs/cards_img";
import { ButtonStyled } from "components/ButtonStyled";

import { Cartao } from "pages/Cartao";
import { Compra } from "pages/Compra";
import { Devedor } from "pages/Devedor";
import { Gasto } from "pages/Gasto";
import { Home } from "pages/Home";
import { Login } from "pages/Login";

export const HeaderContext = createContext<any>([]);

export type ButtonRoute = {
  text: string;
  uri: string;
  component: () => JSX.Element;
  icon: JSX.Element;
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
    { text: "Home", uri: "/home", component: () => <Home />, icon: <AiOutlineHome /> },
    { text: "Devedores", uri: "/devedores", component: () => <Devedor />, icon: <IoIosPeople /> },
    { text: "Cartões", uri: "/cartoes", component: () => <Cartao />, icon: <CardsImg /> },
    { text: "Gastos", uri: "/gastos", component: () => <Gasto />, icon: <FaFileInvoiceDollar /> },
    { text: "Compras", uri: "/compras", component: () => <Compra />, icon: <FaMoneyBillWaveAlt /> },
  ];

  return (
    <HeaderContext.Provider value={{ buttonRoutes }}>
      {!usuario ? (
        <>
          {history.push("/")}
          <Login />
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: ".5rem",
              padding: ".5rem .2rem",
            }}
            className="header"
          >
            {buttonRoutes
              .filter((route) => route.uri !== "/")
              .map((route: ButtonRoute, index) => (
                <ButtonStyled
                  key={`${index}`}
                  content={route.text as string}
                  onClick={() => history.push(route.uri)}
                  icon={route.icon}
                />
              ))}
          </div>
          <Divider />
        </>
      )}
      {children}
    </HeaderContext.Provider>
  );
}
