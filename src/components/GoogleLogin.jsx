import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const { googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("User login successfully.");
        navigate(location?.state ? location.state : "/");
        // console.log(user);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="">
      <button
        onClick={handleGoogle}
        className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google Icon"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </button>
    </div>
  );
}
