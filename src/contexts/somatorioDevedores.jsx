import { createContext, useState } from "react";

export const SomatorioDevedoresContext = createContext();

export function SomatorioDevedoresProvider({children}) {
  const [somatorio, setSomatorio] = useState(0);

  return (
    <SomatorioDevedoresContext.Provider value={{somatorio, setSomatorio}}>
      {children}
    </SomatorioDevedoresContext.Provider>
  )
}