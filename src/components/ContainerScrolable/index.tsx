import { HTMLAttributes } from "react";

export function ContainerScrolable({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      style={{
        // height: "calc(var(--HMain) - 130px)",
        overflowY: "auto",
        // height: "80%",
      }}
    >
      {children}
    </div>
  );
}
