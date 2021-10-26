import React from "react";
import SEO from "src/shared/components/SEO";
import NewPost from "src/pages/home/components/NewPost";
import Post from "src/pages/home/components/Post";
import PostsData from "src/shared/utils/data/posts.json";

const Home: React.FC = () => {
  return (
    <section className="home">
      <SEO title="Home" />
      <NewPost avatar="https://rezpaz78.github.io/static/media/reza.08e777ba.jpg" />
      <div className="home__posts">
        {PostsData.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </section>
  );
};

export default Home;
