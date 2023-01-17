import { Route } from "react-router-dom";

import { ButtonRoute } from "contexts/header";

import { useHeaderContext } from "hooks/useHeaderContext";

export default function Main() {
  const { buttonRoutes } = useHeaderContext();

  return (
    <div
      style={{
        height: "calc(var(--HMain) - 130px)",
        overflowY: "scroll",
      }}
    >
      {buttonRoutes.map((route: ButtonRoute, index: number) => (
        <Route key={`${index}`} path={route.uri} exact component={route.component} />
      ))}
    </div>
  );
}
