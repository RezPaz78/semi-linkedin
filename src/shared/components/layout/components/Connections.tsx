import React from "react";
import { ConnectionsProps } from "src/shared/components/layout/types";
import Connection from "src/shared/components/layout/components/Connection";

const Connections: React.FC<ConnectionsProps> = ({ connections }) => {
  return (
    <div className="connections">
      <h3 className="connections__title">ارتباطات خود را گسترش دهید</h3>
      <div className="connections__items">
        {connections.map((connection) => (
          <Connection
            name={connection.name}
            avatar={connection.avatar}
            role={connection.role}
            key={connection.name}
          />
        ))}
      </div>
      <div className="connections__more">بیشتر</div>
    </div>
  );
};

export default Connections;
