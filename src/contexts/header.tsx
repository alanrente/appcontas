import { createContext, useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaFileInvoiceDollar, FaMoneyBillWaveAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { RiFolderUserLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

import { Divider } from "@material-ui/core";

import { Role } from "interfaces/Roles";
import { TypeSession } from "interfaces/TypesSessions";
import ThreeDots from "Skeletons/ThreeDots";
import CardsImg from "static/svgs/cards_img";
import { ButtonStyled } from "components/ButtonStyled";
import { useLoginGoogle } from "components/LoginGoogle/index.hook";
import { MenuHeader } from "components/MenuHeader";
import { Cartao } from "pages/Cartao";
import { Compra } from "pages/Compra";
import { Devedor } from "pages/Devedor";
import { Gasto } from "pages/Gasto";
import { Home } from "pages/Home";
import { Login } from "pages/Login";

import ProfilesPage from "pages/Profiles";
import getUserSession from "utils/getUserSession";
import styleHeader from "../styles/HeaderContext.module.scss";

export const HeaderContext = createContext<any>([]);

export type ButtonRoute = {
  text: string;
  uri: string;
  component: () => JSX.Element;
  icon: JSX.Element;
  roles: Role[];
  onClick?: () => any;
};

export function HeaderProvider({ children }: any) {
  const history = useHistory();

  const { logout } = useLoginGoogle();

  const googleUrlPhoto = getUserSession().urlPhoto;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModile, setIsMobile] = useState<boolean>(false);

  const [hasUser] = useState(() => {
    const hasUserInSession = !!sessionStorage.getItem(TypeSession.keyUser);

    if (hasUserInSession) {
      history.push("/home");
      return true;
    }

    history.push("/");
    return false;
  });

  const buttonRoutes: ButtonRoute[] = [
    { text: "Home", uri: "/home", component: () => <Home />, icon: <AiOutlineHome />, roles: [Role.USER, Role.ADMIN] },
    { text: "Devedores", uri: "/devedores", component: () => <Devedor />, icon: <IoIosPeople />, roles: [Role.ADMIN] },
    {
      text: "Perfis",
      uri: "/profiles",
      component: () => <ProfilesPage />,
      icon: <RiFolderUserLine />,
      roles: [Role.ADMIN],
    },
    { text: "Cartões", uri: "/cartoes", component: () => <Cartao />, icon: <CardsImg />, roles: [Role.ADMIN] },
    {
      text: "Gastos",
      uri: "/gastos",
      component: () => <Gasto />,
      icon: <FaFileInvoiceDollar />,
      roles: [Role.USER, Role.ADMIN],
    },
    {
      text: "Compras pendentes",
      uri: "/compras",
      component: () => <Compra />,
      icon: <FaMoneyBillWaveAlt />,
      roles: [Role.ADMIN],
    },
  ];

  async function handleLogout() {
    setIsLoading(true);
    await logout();
    // window.location.assign("/");
    window.location.assign("/");
    setIsLoading(false);
  }

  function getProfileSession() {
    const { profile } = getUserSession();
    return profile;
  }

  function showButtonsFromRole() {
    const profile = getProfileSession();

    return buttonRoutes.filter((btn) => btn.roles.some((role) => role === profile.role) || btn.roles.length === 0);
  }

  useEffect(() => {
    const width = screen.width;

    if (width < 640) {
      setIsMobile(true);
    }
  }, []);

  return (
    <HeaderContext.Provider value={{ buttonRoutes, isLoading, setIsLoading, user: getUserSession() }}>
      {!isLoading ? (
        <>
          {!hasUser ? (
            <>
              {history.push("/")}
              <Login />
            </>
          ) : (
            <div className={styleHeader.headerContext}>
              {isModile ? (
                <MenuHeader key={1} buttons={showButtonsFromRole()} />
              ) : (
                <div
                  style={{
                    display: `${isModile ? "none" : "flex"}`,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: ".5rem",
                    padding: ".5rem 0",
                    alignItems: "center",
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
              )}
              <div className={styleHeader.logout}>
                <MenuHeader
                  key={2}
                  right
                  img={googleUrlPhoto}
                  buttons={[{ uri: "", icon: <FiLogOut />, onClick: () => handleLogout() }]}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <ThreeDots />
      )}
      <Divider />
      {!isLoading ? children : <ThreeDots />}
    </HeaderContext.Provider>
  );
}
