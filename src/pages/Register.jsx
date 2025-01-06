import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import registerLottie from "../assets/register.json";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const { registerUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (password.length < 6) {
      setError("Password must be 6 characters or longer.");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    }

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User registered successfully");

        updateUserProfile({
          displayName: name,
          photoURL: photo,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800"
    >
      <Helmet>
        <title>Register | PlayGear</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white dark:bg-gray-700 max-w-4xl w-full">
        {/* Left Section */}
        <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">
            Create Account
          </h2>
          <form onSubmit={handleRegister} className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              required
            />
            <div className="relative w-full mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-3 flex items-center text-blue-500 dark:text-blue-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {/* Reserve space for error message */}
              <div className="h-5">
                {error && <p className="text-red-600 text-xs">{error}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:scale-105 px-6 py-2 rounded-xl font-medium transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8 m-2 lg:m-0 lg:w-1/2 flex flex-col justify-center items-center rounded-r-lg md:rounded-tl-[100px] md:rounded-bl-[100px]">
          <Lottie className="w-full h-36" animationData={registerLottie} />
          <p className="my-2 text-sm text-center">
            Already have an account? Login to access your profile.
          </p>
          <Link
            to="/login"
            className="bg-white text-blue-500 hover:bg-gray-100 px-6 py-2 rounded-xl font-medium transition"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
