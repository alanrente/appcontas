import React from "react";

export interface ButtonProps {
  content: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
}
