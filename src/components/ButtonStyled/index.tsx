import { MdOutlineDisabledByDefault } from "react-icons/md";
import { StyledButton } from "./index.styled";
import { ButtonProps } from "./index.types";

export function ButtonStyled({ content, onClick, icon }: ButtonProps) {
  return (
    <StyledButton className="contentText" onClick={onClick} title={content}>
      {icon || <MdOutlineDisabledByDefault />}
    </StyledButton>
  );
}
