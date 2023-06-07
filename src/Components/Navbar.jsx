import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" shadow-md py-4">
      <div className="flex px-2 md:w-10/12 mx-auto justify-between items-center">
        <div className=" flex items-center gap-1 w-fit ">
          <img src="/logo.jpg" alt="" className="w-24 mx-auto" />
          <h1 className="text-2xl font-bold">Sports-Mentor</h1>
        </div>
        <div className="flex ">
          <ul className="nav-link absolute md:static w-full md:w-fit left-0 top-[95px] bg-white ">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "border-b border-orange-600" : ""
                }
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
          </ul>
          <div className="order-1 md:order-1">
            <button className="btn btn-primary  ">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
