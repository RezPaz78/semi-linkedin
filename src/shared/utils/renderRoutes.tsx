import { Route as RRoute } from "react-router-dom";
import { Route } from "src/shared/types";

export const renderRoutes = (routes: Route[]) => {
  return routes.map((route, key) => {
    return (
      <RRoute key={key} path={route.path} exact={route.exact}>
        <route.component />
      </RRoute>
    );
  });
};
