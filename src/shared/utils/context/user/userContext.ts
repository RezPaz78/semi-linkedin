import { createContext, useContext } from "react";
import { UserState } from "src/shared/types";

export const userInitialState: UserState = {
  avatar: "https://rezpaz78.github.io/static/media/reza.08e777ba.jpg",
  name: "Reza Pazan",
  role: "Front-End Developer",
};

export const UserContext = createContext<UserState>(userInitialState);
export const useUser = () => useContext(UserContext);
