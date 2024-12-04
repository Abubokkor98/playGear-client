import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    // <nav className="bg-gray-800 text-white shadow-md">
    //   <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    //     {/* Website Logo/Name */}
    //     <Link to="/" className="text-2xl font-bold">
    //       PlayGear
    //     </Link>

    //     {/* Navbar Links */}
    //     <div className="flex items-center space-x-6">
    //       <NavLink
    //         to="/"
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-400" : "hover:text-blue-300"
    //         }
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         to="/all-equipment"
    //         className={({ isActive }) =>
    //           isActive ? "text-blue-400" : "hover:text-blue-300"
    //         }
    //       >
    //         All Sports Equipment
    //       </NavLink>
    //       {user && (
    //         <>
    //           <NavLink
    //             to="/add-equipment"
    //             className={({ isActive }) =>
    //               isActive ? "text-blue-400" : "hover:text-blue-300"
    //             }
    //           >
    //             Add Equipment
    //           </NavLink>
    //           <NavLink
    //             to="/my-equipment"
    //             className={({ isActive }) =>
    //               isActive ? "text-blue-400" : "hover:text-blue-300"
    //             }
    //           >
    //             My Equipment List
    //           </NavLink>
    //         </>
    //       )}
    //     </div>

    //     {/* Authentication Buttons */}
    //     <div className="flex items-center space-x-4">
    //       {user ? (
    //         <div className="flex items-center space-x-4">
    //           <div className="relative group">
    //             <img
    //               src={user?.photoURL}
    //               alt="User"
    //               className="w-10 h-10 rounded-full border-2 border-white"
    //             />
    //             <div className="absolute hidden group-hover:block bg-gray-900 text-white p-2 rounded-md shadow-lg mt-2 text-sm">
    //               <p>{user?.displayName}</p>
    //               <p>{user?.email}</p>
    //             </div>
    //           </div>
    //           <button
    //             onClick={handleLogout}
    //             className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm"
    //           >
    //             Log Out
    //           </button>
    //         </div>
    //       ) : (
    //         <>
    //           <Link
    //             to="/login"
    //             className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm"
    //           >
    //             Login
    //           </Link>
    //           <Link
    //             to="/register"
    //             className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm"
    //           >
    //             Register
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </nav>

    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Website Logo/Name */}
        <Link to="/" className="text-2xl font-bold">
          PlayGear
        </Link>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6">
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
          {/* {user && (
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
          )} */}
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          
            <>
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
        
        </div>
      </div>
    </nav>
  );
}
