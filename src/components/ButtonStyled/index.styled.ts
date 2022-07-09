import { Button } from "@material-ui/core";

import styled from "styled-components";

export const StyledButton = styled(Button)`
  padding: 0.3rem 0.15rem !important;

  .contentText {
    font-size: calc(1.5vw + 3px);
    font-weight: 500;
  }
`;
