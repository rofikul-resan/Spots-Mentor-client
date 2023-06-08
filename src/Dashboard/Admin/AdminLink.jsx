import { NavLink } from "react-router-dom";
import { FaUsersCog } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

const AdminLink = () => {
  return (
    <>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./manage-user"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <FaUsersCog /> Manage Users
        </NavLink>
      </li>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./manage-class"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <AiFillSetting />
          Manage Classes
        </NavLink>
      </li>
    </>
  );
};

export default AdminLink;
