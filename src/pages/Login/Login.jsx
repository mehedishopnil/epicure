import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log("Login clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-full h-full grid grid-cols-2">
      <div className="flex flex-col justify-center gap-10 p-10 bg-[#BE6F50]">
        <h1 className="text-[60px] text-white font-syne font-bold">Epicure</h1>
        <h2 className="font-syne text-[45px] text-white">Feast Your Senses Culinary Creators on Exclusive Hub</h2>
      </div>

      <div className=" grid  items-center bg-[#1F1D1C]">
        <div className="max-w-md mx-auto mt-8 p-6 ">
          <h2 className="text-2xl text-white font-bold  mb-4">Log in</h2>
          <form onSubmit={handleSubmit} className="w-[400px]">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm  font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#8F8F8F] text-white py-2 px-4 rounded-md hover:bg-[#BE6F50] focus:outline-none focus:bg-blue-600"
            >
              Log in
            </button>
          </form>


          <button className="mt-10 w-full flex items-center justify-center text-white bg-[#BE6F50] py-2 px-4  rounded-full hover:bg-[#8F8F8F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FaGoogle className="mr-2" /> Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
