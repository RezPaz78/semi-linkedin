export type UserState = {
  avatar: string;
  name: string;
  role: string;
};

export type UserAction = {
  type: string;
  payload: UserState;
};
