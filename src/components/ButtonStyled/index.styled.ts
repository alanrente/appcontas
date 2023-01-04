import styled from "styled-components";

export const StyledButton = styled.button`
  /* padding: 0.25rem !important; */

  min-height: 40px;
  min-width: 70px;

  svg {
    width: 25px;
    height: 25px;
  }

  .contentText {
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    svg {
      width: 40px;
      height: 40px;
    }
    .contentText {
      font-size: calc(1.5vw + 3px);
    }
  }
`;
