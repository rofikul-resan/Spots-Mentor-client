import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className=" shadow-md py-4">
      <div className="flex px-2 md:w-10/12 mx-auto justify-between items-center">
        <div className=" md:flex items-center gap-1 w-fit ">
          <img src="/logo.jpg" alt="" className="w-12 mx-auto" />
          <h1 className="text-2xl font-bold">Sports-Mentor</h1>
        </div>
        <div className="flex ">
          <ul className="nav-link absolute md:static w-full md:w-fit left-0 top-[95px] bg-white ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "btn-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/instructors"}
                className={({ isActive }) =>
                  isActive ? "border-b border-orange-600" : ""
                }
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/class"}
                className={({ isActive }) =>
                  isActive ? "border-b border-orange-600" : ""
                }
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/dashboard "}
                className={({ isActive }) =>
                  isActive ? "border-b border-orange-600" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add-class "}
                className={({ isActive }) =>
                  isActive ? "border-b border-orange-600" : ""
                }
              >
                Add class
              </NavLink>
            </li>
          </ul>
          <div className="order-1 md:order-1">
            {location.pathname === "/auth/login" ? (
              <Link to={"/auth/sing-up"} className="btn btn-primary btn-sm ">
                sing Up
              </Link>
            ) : (
              <Link to={"/auth/login"} className="btn btn-primary btn-sm ">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
