import { createContext, useState } from "react";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { FaFileInvoiceDollar, FaMoneyBillWaveAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { useHistory } from "react-router-dom";

import { Divider } from "@material-ui/core";

import { Role } from "interfaces/Roles";
import { TypeSession } from "interfaces/TypesSessions";
import CardsImg from "static/svgs/cards_img";
import { ButtonStyled } from "components/ButtonStyled";
import { useLoginGoogle } from "components/LoginGoogle/index.hook";
import { Cartao } from "pages/Cartao";
import { Compra } from "pages/Compra";
import { Devedor } from "pages/Devedor";
import { Gasto } from "pages/Gasto";
import { Home } from "pages/Home";
import { Login } from "pages/Login";

import styleHeader from "../styles/HeaderContext.module.scss";

export const HeaderContext = createContext<any>([]);

export type ButtonRoute = {
  text: string;
  uri: string;
  component: () => JSX.Element;
  icon: JSX.Element;
  roles: Role[];
};

export function HeaderProvider({ children }: any) {
  const history = useHistory();

  const { logout } = useLoginGoogle();

  const [usuario] = useState(() => {
    const hasUserInSession = !!sessionStorage.getItem(TypeSession.keyUser);

    if (hasUserInSession) {
      history.push("/home");
      return true;
    }

    return false;
  });

  const buttonRoutes: ButtonRoute[] = [
    { text: "Home", uri: "/home", component: () => <Home />, icon: <AiOutlineHome />, roles: [] },
    { text: "Devedores", uri: "/devedores", component: () => <Devedor />, icon: <IoIosPeople />, roles: [Role.ADMIN] },
    { text: "Cartões", uri: "/cartoes", component: () => <Cartao />, icon: <CardsImg />, roles: [Role.ADMIN] },
    {
      text: "Gastos",
      uri: "/gastos",
      component: () => <Gasto />,
      icon: <FaFileInvoiceDollar />,
      roles: [Role.USER, Role.ADMIN],
    },
    {
      text: "Compras",
      uri: "/compras",
      component: () => <Compra />,
      icon: <FaMoneyBillWaveAlt />,
      roles: [Role.ADMIN],
    },
  ];

  function handleLogout() {
    logout();
    window.location.assign("/");
  }

  function showButtonsFromRole() {
    const { profile } = JSON.parse(window.sessionStorage.getItem(TypeSession.keyUser) || "{}");

    return buttonRoutes.filter((btn) => btn.roles.some((role) => role === profile.role) || btn.roles.length === 0);
  }

  return (
    <HeaderContext.Provider value={{ buttonRoutes }}>
      {!usuario ? (
        <>
          {history.push("/")}
          <Login />
        </>
      ) : (
        <div className={styleHeader.headerContext}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: ".5rem",
              padding: ".5rem 0",
            }}
            className="header"
          >
            {showButtonsFromRole().map((route: ButtonRoute, index) => (
              <ButtonStyled
                key={`${index}`}
                content={route.text as string}
                onClick={() => history.push(route.uri)}
                icon={route.icon}
              />
            ))}
          </div>
          <div className={styleHeader.logout}>
            <ButtonStyled content="Logout" icon={<AiOutlineLogout />} onClick={handleLogout} />
          </div>
        </div>
      )}
      <Divider />
      {children}
    </HeaderContext.Provider>
  );
}
