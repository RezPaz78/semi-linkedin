import { UserState, UserAction } from "src/shared/types";

const UserReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case "SET":
      return {
        avatar: action.payload.avatar,
        name: action.payload.name,
        role: action.payload.role,
      };
    default:
      return { ...state };
  }
};

export default UserReducer;
