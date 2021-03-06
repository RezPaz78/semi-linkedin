import React from "react";
import Navbar from "src/shared/components/layout/components/Navbar";
import Profile from "src/shared/components/layout/components/Profile";
import Tags from "src/shared/components/layout/components/Tags";
import Connections from "src/shared/components/layout/components/Connections";

// data
import TagData from "src/shared/utils/data/tags.json";
import ConnectionsData from "src/shared/utils/data/connections.json";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="body">
      <Navbar />
      <main className="layout">
        <aside className="layout__profile-panel">
          <Profile />
          <Connections connections={ConnectionsData} />
        </aside>
        {children}
        <Tags tags={TagData} />
      </main>
    </div>
  );
};

export default Layout;
