import styled from "styled-components";

export const StyledCard = styled.div`
  padding: 1rem;

  border-radius: 5px;

  min-height: 8em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #fff;
  font-weight: 500;
  font-size: 1.25rem;

  background: #788;

  :hover {
    cursor: pointer;

    box-shadow: 0.25rem 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
  }
`;

export const NumberCard = styled.label`
  font-size: 0.8rem;
  letter-spacing: 0.25em;
`;
