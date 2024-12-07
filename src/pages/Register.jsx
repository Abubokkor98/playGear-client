import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

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


    // Length validation
    if (password.length < 6) {
      setError("Password must be 6 characters or longer.");
      return;
    }
    // Regex validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase and one lowercase letter."
      );
      return;
    }
    // call register function
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Helmet>
        <title>Register | PlayGear</title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register Account
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-2 top-8"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
