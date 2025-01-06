import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import loginLottie from "../assets/login.json";
import GoogleLogin from "../components/GoogleLogin";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const { loginUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successfully");
        navigate(from);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <motion.div
  initial={{ y: "-100vh", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className="flex items-center justify-center min-h-screen bg-teal-50 dark:bg-gray-800"
>
  <Helmet>
    <title>Login | PlayGear</title>
  </Helmet>
  <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white dark:bg-gray-700 max-w-4xl w-full">
    {/* Left Section */}
    <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4 text-teal-700 dark:text-teal-300">
        Sign In
      </h2>
      <GoogleLogin />
      <form onSubmit={handleLogin} className="w-full">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          required
        />
        <div className="relative w-full mb-4">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-teal-500 dark:text-teal-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:scale-105 px-6 py-2 rounded-xl font-medium transition"
        >
          Sign In
        </button>
      </form>
    </div>

    {/* Right Section */}
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8 lg:w-1/2 flex flex-col justify-center items-center rounded-r-lg md:rounded-tl-[100px] md:rounded-bl-[100px]">
      <Lottie className="w-full h-36" animationData={loginLottie} />
      <p className="my-2 text-sm text-center">
        Register with your personal details to enjoy all features.
      </p>
      <Link
        to="/register"
        className="bg-white text-teal-500 hover:bg-gray-100 px-6 py-2 rounded-xl font-medium transition"
      >
        Sign Up
      </Link>
    </div>
  </div>
</motion.div>

  );
}
