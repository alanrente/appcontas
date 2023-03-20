import styled from "styled-components";

export const ContainerCartao = styled.div`
  padding: 5rem;

  min-height: 30em;

  border: solid green;

  position: relative;

  width: 100%;

  z-index: 2;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-track {
    background: gray;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #141455; /* color of the scroll thumb */
    border-radius: 10px; /* roundness of the scroll thumb */
  }
`;

export const SectionCartao = styled.section`
  position: absolute;

  width: 100%;

  top: 0;
  left: 0;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  z-index: 1;

  .btn-addCartao {
    background-color: transparent;
    width: 100%;
    height: 3rem;
    border: 1px solid;
    max-width: none;
    border-radius: 20px;

    :hover {
      background-color: #f1f1f1;
      box-shadow: 3px 4px 10px 0px;
      cursor: pointer;
    }
  }
`;
