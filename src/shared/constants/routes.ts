import { lazy } from "react";
import { DynamicImportType, LazyComponentType, Route } from "src/shared/types";

const homeImport: DynamicImportType = () => import("src/pages/home");
const Home: LazyComponentType = lazy(homeImport);

const notFoundImport: DynamicImportType = () => import("src/pages/404");
const NotFound: LazyComponentType = lazy(notFoundImport);

export const routes: Route[] = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    component: NotFound,
  },
];
