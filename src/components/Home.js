// Home.jsx
import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to={"/products"}>
        <button className="home-button">Our products</button>
      </Link>
    </div>
  );
};

export default Home;
