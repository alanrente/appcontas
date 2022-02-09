import { Route } from "react-router-dom";

import { ButtonRoute } from "../contexts/header";
import { useHeaderContext } from "../hooks/useHeaderContext";

export default function Routes() {
  const { buttonRoutes } = useHeaderContext();

  return (
    <>
      {buttonRoutes.map((route: ButtonRoute) => (
        <Route path={route.uri} exact component={route.component} />
      ))}
    </>
  );
}
