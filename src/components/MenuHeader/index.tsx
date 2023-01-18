import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { Divider } from "antd";
import { PropsHeaderMenu } from "interfaces/IHeader";
import { ButtonStyled } from "components/ButtonStyled";
import { ButtonRoute } from "contexts/header";
import style from "./MenuHeader.module.scss";

export function MenuHeader({ buttons, right = false, img }: PropsHeaderMenu) {
  const history = useHistory();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div style={{ position: "relative" }}>
      {img ? (
        <img className={style.image} src={img} onClick={() => setIsVisible(!isVisible)} />
      ) : (
        <ButtonStyled content="Menu" icon={<IoMdMenu />} onClick={() => setIsVisible(!isVisible)} />
      )}
      <div
        className={`${isVisible ? style.visible : style["not-visible"]} ${style.container} ${
          right ? style.isRight : ""
        }`}
      >
        {buttons.map((route: ButtonRoute, index) => (
          <div
            key={`${index}`}
            onClick={() => {
              route.onClick ? route.onClick() : history.push(route.uri);
              setIsVisible(!isVisible);
            }}
            className={style.contentButton}
          >
            {<div style={{ margin: "5px" }}>{route.icon}</div>}
            {index !== buttons.length - 1 && <Divider key={index} style={{ margin: "0" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
