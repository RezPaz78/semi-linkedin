import { UserState } from "src/shared/types";
import { TagProps } from "src/shared/components/layout/types";

export type NewPostProps = {
  avatar: string;
};

export type PostProps = {
  user: UserState;
  text: string;
  media?: string[];
  isCompany: true | false;
  tags?: TagProps[];
  likesCount?: number;
};
