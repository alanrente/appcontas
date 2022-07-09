import { StyledButton } from "./index.styled";
import { ButtonProps } from "./index.types";

export function ButtonStyled({ content, onClick }: ButtonProps) {
  return (
    <StyledButton variant="outlined" onClick={onClick}>
      <label className="contentText">{content}</label>
    </StyledButton>
  );
}
