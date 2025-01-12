import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logoutUser, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        toast.error("User Logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // handle dark mode
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 dark:bg-gray-900 text-white shadow-md transition-colors duration-300">
      <div className="px-4 py-3 flex justify-between items-center">
        {/* Website Logo/Name */}
        <Link to="/" className="text-2xl font-bold">
          PlayGear
        </Link>

        {/* Hamburger Menu */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Dark Mode Toggle */}
          <button onClick={() => darkModeHandler()}>
            {dark ? <IoSunny /> : <IoMoon />}
          </button>

          {user ? (
            <div className="mr-4">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ) : (
                <FaUserCircle
                  className="w-10 h-10 text-white bg-gray-400 rounded-full border-2 border-white"
                  title={user.displayName}
                />
              )}
            </div>
          ) : null}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-equipment"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
          >
            All Sports Equipment
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
          >
            Explore Categories
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-equipment"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "hover:text-blue-300"
                }
              >
                Add Equipment
              </NavLink>
              <NavLink
                to="/my-equipment"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "hover:text-blue-300"
                }
              >
                My Equipment List
              </NavLink>
            </>
          )}
        </div>

        {/* btns for desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <>
              {/* Dark Mode Toggle */}
              <button onClick={() => darkModeHandler()}>
                {dark ? <IoSunny /> : <IoMoon />}
              </button>
              <div className="relative group">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white hidden lg:block"
                />
                <div className="absolute hidden group-hover:block bg-gray-900 text-white p-2 rounded-md shadow-lg mt-2 text-sm z-50">
                  <p>{user?.displayName}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              {/* Dark Mode Toggle */}
              <button onClick={() => darkModeHandler()}>
                {dark ? <IoSunny /> : <IoMoon />}
              </button>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-start bg-gray-800 p-5 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-equipment"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            All Sports Equipment
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-equipment"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "hover:text-blue-300"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Add Equipment
              </NavLink>
              <NavLink
                to="/my-equipment"
                className={({ isActive }) =>
                  isActive ? "text-blue-400" : "hover:text-blue-300"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Equipment List
              </NavLink>
            </>
          )}
          {/*Btns in Dropdown */}
          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white w-full px-4 py-2 rounded-md text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-600 text-white w-full px-4 py-2 rounded-md text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="bg-red-500 hover:bg-red-600 text-white w-full px-4 py-2 rounded-md text-sm"
            >
              Log Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
