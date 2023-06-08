import { NavLink } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa";

const InstructorLInk = () => {
  return (
    <>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./add-class"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <BiAddToQueue /> Add class
        </NavLink>
      </li>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./My-class"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <FaLayerGroup />
          My Classes
        </NavLink>
      </li>
    </>
  );
};

export default InstructorLInk;
