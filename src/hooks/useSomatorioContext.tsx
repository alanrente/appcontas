import { useContext } from "react";

import { SomatorioDevedoresContext } from "../contexts/somatorioDevedores";

export function useSomatorioContext() {
  const context = useContext(SomatorioDevedoresContext);

  return context;
}
