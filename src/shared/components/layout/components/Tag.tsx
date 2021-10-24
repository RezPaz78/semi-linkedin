import React from "react";
import { TagProps } from "src/shared/components/layout/types";

const Tag: React.FC<TagProps> = ({ title }) => {
  return <span className="tag">#{title}</span>;
};

export default Tag;
