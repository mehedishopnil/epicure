import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "./Login.css"; // Import CSS file if needed
import { Link } from "react-router-dom";

const Login = () => {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log("Login clicked");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-full h-full font-syne grid grid-cols-2">
      {/* Left side: Logo and Tagline */}
      <div className="flex flex-col justify-center gap-10 p-10 bg-[#BE6F50]">
        <h1 className="text-[60px] text-white font-bold">Epicure</h1>
        <h2 className="font-syne text-[45px] text-white">Feast Your Senses Culinary Creators on Exclusive Hub</h2>
      </div>

      {/* Right side: Login form */}
      <div className="grid items-center bg-[#1F1D1C]">
        <div className="max-w-md mx-auto mt-8 p-6">
          {/* Form title */}
          <h2 className="text-2xl text-white font-bold mb-4">Log in</h2>
          <form onSubmit={handleSubmit} className="w-[400px]">
            {/* Email input */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 p-2 block w-full border border-gray-300 bg-[#8f8f8f00] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${email ? 'text-white' : ''}`}
                required
              />
            </div>
            {/* Password input */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 p-2 block w-full border border-gray-300 bg-[#8f8f8f00] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${password ? 'text-white' : ''}`}
                required
              />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#8F8F8F] text-white py-2 px-4 rounded-md hover:bg-[#BE6F50] focus:outline-none focus:bg-blue-600"
            >
              Log in
            </button>
            {/* Link to signup page */}
            <p className="text-white text-center mt-5">Don't have an account? <Link to="/signup"><span className="underline text-[#BE6F50]">Sign up</span></Link> </p>
          </form>
          {/* Login with Google button */}
          <button className="mt-10 w-full flex items-center justify-center text-white bg-[#BE6F50] py-2 px-4 rounded-full hover:bg-[#8F8F8F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FaGoogle className="mr-2" /> Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
