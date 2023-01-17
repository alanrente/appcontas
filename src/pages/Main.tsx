import { Route } from "react-router-dom";

import { ButtonRoute } from "contexts/header";

import { useHeaderContext } from "hooks/useHeaderContext";
import { useMain } from "hooks/useMain";

export default function Main() {
  const { buttonRoutes } = useHeaderContext();

  useMain();

  return (
    <div className="main">
      {buttonRoutes.map((route: ButtonRoute, index: number) => (
        <Route key={`${index}`} path={route.uri} exact component={route.component} />
      ))}
    </div>
  );
}
