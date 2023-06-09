import { NavLink } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";

const StudentLink = () => {
  return (
    <>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./booking-class"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <BsCardChecklist /> Booking class
        </NavLink>
      </li>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./enroll-class"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <AiOutlineFileDone /> Enroll class
        </NavLink>
      </li>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./payment"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <GiWallet />
          Payment History
        </NavLink>
      </li>
    </>
  );
};

export default StudentLink;
