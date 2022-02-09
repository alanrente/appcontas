import { useContext } from "react";

import { HeaderContext } from "../contexts/header";

export function useHeaderContext() {
  const context = useContext(HeaderContext);

  return context;
}
