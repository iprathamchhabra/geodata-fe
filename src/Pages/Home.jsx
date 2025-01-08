import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center text-center bg-gradient-to-r from-teal-500 to-cyan-900 h-[92vh]">
      <div className="text-white p-8 bg-opacity-60 max-w-lg mx-auto rounded-lg shadow-2xl">
        <h1 className="text-4xl font-extrabold leading-tight mb-6">
          Welcome to GeoData
        </h1>
        <p className="text-lg mb-6">
          Discover, manage, and visualize geographical data like never before.
          Whether you're a pro or a beginner, GeoData is your go-to solution for
          powerful map-based data management.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/about"
            className="bg-cyan-600 text-white py-3 px-6 rounded-full hover:bg-cyan-700 transition duration-300"
          >
            Learn More
          </Link>
          <Link
            to="/login"
            className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
