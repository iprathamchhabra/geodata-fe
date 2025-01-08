import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://geodata-be.railway.internal/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      alert("Login successfully!");
      navigate("/");
    } catch (error) {
      alert("Please try again!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-cyan-500">
      <div className="max-w-md bg-white shadow-2xl rounded-lg overflow-hidden p-8 transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-extrabold text-center text-teal-800 mb-6">
          Welcome to Geo Data
        </h2>
        <h3 className="text-2xl font-semibold text-left text-gray-700 mb-4 relative">
          Login
          <span className="absolute left-0 bottom-0 h-1 w-8 bg-teal-500 rounded-full"></span>
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-left text-sm text-gray-700">
          Not an existing user?{" "}
          <Link
            className="text-teal-500 hover:text-teal-600 transition duration-300"
            to="/register"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
