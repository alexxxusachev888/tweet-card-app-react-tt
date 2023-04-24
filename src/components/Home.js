import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Twitter Cards</h1>
      <Link to="/tweets">Go to Tweets</Link>
    </div>
  );
};

export default Home;