import React from "react";
import { ConnectionProps } from "src/shared/components/layout/types";

const Connection: React.FC<ConnectionProps> = ({ avatar, role, name }) => {
  return (
    <div className="connection">
      <img className="connection__avatar" src={avatar} alt={name} />
      <div className="connection__info">
        <h2 className="connection__info-name">{name}</h2>
        <h3 className="connection__info-role">{role}</h3>
      </div>
      <button className="connection__button">Connect</button>
    </div>
  );
};

export default Connection;
