export type TagProps = {
  id: number;
  title: string;
};

export type TagsProps = {
  tags: TagProps[];
};

export type ConnectionProps = {
  avatar: string;
  name: string;
  role: string;
};

export type ConnectionsProps = {
  connections: ConnectionProps[];
};
