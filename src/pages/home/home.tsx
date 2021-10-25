import React from "react";
import SEO from "src/shared/components/SEO";
import NewPost from "src/pages/home/components/NewPost";

const Home: React.FC = () => {
  return (
    <section className="home">
      <SEO title="Home" />
      <NewPost avatar="https://rezpaz78.github.io/static/media/reza.08e777ba.jpg" />
    </section>
  );
};

export default Home;
