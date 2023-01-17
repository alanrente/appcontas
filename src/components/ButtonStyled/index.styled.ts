import styled from "styled-components";

export const StyledButton = styled.button`
  /* padding: 0.25rem !important; */

  /* min-height: 40px; */
  height: var(--HBtnMd);
  min-width: 70px;
  display: flex;
  justify-content: center;

  svg {
    width: 25px;
    height: 25px;
    align-self: center;
    color: #4c4c4c;
  }

  .contentText {
    font-size: 1.25rem;
    font-weight: 500;
  }

  /* @media (max-width: 600px) {
    svg {
      width: 40px;
      height: 40px;
    }
    .contentText {
      font-size: calc(1.5vw + 3px);
    }
  } */
`;
