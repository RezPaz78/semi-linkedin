import { LazyComponentType } from "src/shared/types";

export type Route = {
  path?: string;
  exact?: true;
  component: LazyComponentType;
};
