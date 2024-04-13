import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { Link } from "react-router-dom";

const CreatorSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup clicked");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="h-full rounded-lg bg-[#1E1C1A]">
      <div className="font-syne h-full rounded-lg lg:grid lg:grid-cols-2">

      <div className="relative flex flex-col justify-center md:h-[250px] lg:h-full lg:rounded-lg gap-10 p-10 bg-[#BE6F50] overflow-hidden">
          <div className="absolute -top-5 -left-5 w-52 h-52 rounded-full bg-[#F6C388] filter blur-2xl opacity-30 lg:opacity-50 z-10 overflow-hidden"></div>

          <div className="absolute -bottom-10 -left-5 w-64 h-52 rounded-full bg-[#F6C388] filter blur-2xl opacity-30 lg:opacity-50 z-10 overflow-hidden"></div>

          <div className="absolute -bottom-5 -right-5 w-52 h-96 rounded-full bg-[#F6C388] filter blur-2xl opacity-30 lg:opacity-50 z-10 overflow-hidden"></div>

          <h1 className="md:text-[35px] lg:text-[50px] xl:text-[60px] text-white font-bold">
            Epicure
          </h1>
          <h2 className="font-syne lg:text-[35px] xl:text-[45px] text-white">
            Feast Your Senses Culinary Creators on Exclusive Hub
          </h2>
        </div>


        <div className="grid items-center md:h-[550px] lg:h-full lg:rounded-lg bg-[#1F1D1C]">
          <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl text-white font-bold mb-4">
              Sign up as
              <br></br>content creator
            </h2>
            <form onSubmit={handleSubmit} className="">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 p-2 block w-full border border-gray-300 bg-[#8f8f8f00] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    name ? "text-white" : ""
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 p-2 block w-full border border-gray-300 bg-[#8f8f8f00] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    email ? "text-white" : ""
                  }`}
                  required
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 p-2 block w-full border border-gray-300 bg-[#8f8f8f00] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    password ? "text-white" : ""
                  }`}
                  required
                />
                {/* Eye icon button to toggle password visibility */}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent text-[#e1e1e1]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8F8F8F] text-white py-2 px-4 rounded-md hover:bg-[#BE6F50] focus:outline-none focus:bg-blue-600"
              >
                Sign up
              </button>
              <p className="text-white text-center mt-5">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="underline text-[#BE6F50]">Log in</span>
                </Link>
              </p>
              <p className="text-white text-center mt-5">
                User?{" "}
                <Link to="/signup">
                  <span className="underline text-[#BE6F50]">
                    Sign up as a user{" "}
                  </span>
                </Link>
              </p>
            </form>
            <button className="mt-10 w-full flex items-center justify-center text-white bg-[#BE6F50] py-2 px-4 rounded-full hover:bg-[#8F8F8F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FaGoogle className="mr-2" /> Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorSignUp;
