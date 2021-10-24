import React from "react";
import Navbar from "src/shared/components/layout/components/Navbar";
import Profile from "src/shared/components/layout/components/Profile";
import Tags from "src/shared/components/layout/components/Tags";
import TagData from "src/shared/utils/data/tags.json";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="layout">
        <Profile />
        {children}
        <Tags tags={TagData} />
      </main>
    </>
  );
};

export default Layout;
