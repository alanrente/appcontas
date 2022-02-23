import styled from "styled-components";

export const ContainerCartao = styled.div`
  padding: 5rem;

  min-height: 5em;

  border: solid green;

  position: relative;

  width: 100%;

  z-index: 2;

  overflow-y: scroll;
`;

export const SectionCartao = styled.section`
  position: absolute;

  border: solid red;

  width: 100%;

  top: 0;
  left: 0;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  min-height: 15em;

  background: red;

  z-index: 1;
`;

export const StyledCartao = styled.div`
  padding: 1rem;

  border-radius: 5px;

  background: #fff;
`;
