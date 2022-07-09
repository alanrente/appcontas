import { Button } from "@material-ui/core";

import styled from "styled-components";

export const StyledButton = styled(Button)`
  padding: 0.25rem 1rem !important;
  .contentText {
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    .contentText {
      font-size: calc(1.5vw + 3px);
    }
  }
`;
