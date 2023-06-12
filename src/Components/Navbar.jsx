import { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import ThemeToggler from "./ThemeToggler";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const location = useLocation();
  const [navShow, setNavShow] = useState(false);
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className=" shadow-md py-4">
      <div className="flex px-2 md:w-10/12 mx-auto justify-between items-center">
        <div className=" md:flex items-center gap-1 w-fit ">
          <img src="/logo.jpg" alt="" className="w-12 mx-auto" />
          <h1 className="text-2xl font-bold">Sports-Mentor</h1>
        </div>
        <div className={`flex `}>
          <ul
            className={`nav-link mr-3 absolute md:static w-full md:w-fit left-0 top-[95px] bg-base-300 md:bg-transparent z-10 py-5 md:py-0 ${
              navShow ? "hidden md:flex" : "flex"
            } `}
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " bg-orange-600 btn hover:bg-orange-800 text-white btn-sm "
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/instructors"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-600 btn hover:bg-orange-800 text-white btn-sm"
                    : ""
                }
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/class"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-600 hover:bg-orange-800 btn-sm text-white btn"
                    : ""
                }
              >
                Classes
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to={"/dashboard "}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-orange-600 hover:bg-orange-800 btn-sm text-white btn"
                      : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
          <div className="order-1 md:order-1 flex gap-2 items-center ">
            <ThemeToggler />
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow z-10 menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>{user.displayName}</a>
                    </li>

                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a onClick={() => logout().then(() => {})}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div>
                {location.pathname === "/auth/login" ? (
                  <Link
                    to={"/auth/sing-up"}
                    className="btn btn-primary btn-sm "
                  >
                    sing Up
                  </Link>
                ) : (
                  <Link to={"/auth/login"} className="btn btn-primary btn-sm ">
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={() => setNavShow(!navShow)}>
              <Hamburger toggled={!navShow} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
