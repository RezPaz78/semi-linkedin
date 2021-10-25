import React from "react";
import Add from "src/assets/img/add.png";
import Tag from "src/shared/components/layout/components/Tag";
import { TagsProps } from "src/shared/components/layout/types";

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <aside className="tags">
      <div className="tags__heading">
        <h3 className="tags__heading-title">هشتگ‌هایی که دنبال می‌کنید</h3>
        <img className="tags__heading-add" src={Add} alt="add" />
      </div>
      <div className="tags__items">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} id={tag.id} />
        ))}
      </div>
    </aside>
  );
};

export default Tags;
