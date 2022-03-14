import { createContext, useState } from "react";

import { Divider } from "@material-ui/core";

export const SomatorioDevedoresContext = createContext<any>([]);

export function SomatorioDevedoresProvider({ children }: any) {
  const [somatorio, setSomatorio] = useState(0);

  return (
    <SomatorioDevedoresContext.Provider value={{ somatorio, setSomatorio }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        Somatorio: {somatorio}
      </div>
      <Divider />
      <div>{children}</div>
    </SomatorioDevedoresContext.Provider>
  );
}
