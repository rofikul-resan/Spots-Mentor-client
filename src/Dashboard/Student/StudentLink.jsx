import { NavLink } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import useBookingList from "../../Hook/useBookingList";
import useEnrollClass from "../../Hook/useEnrollClass";

const StudentLink = () => {
  const { bookingClass } = useBookingList();
  const { enrollClass } = useEnrollClass();

  return (
    <>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./booking-class"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <BsCardChecklist /> Booking class{" "}
          <span className="badge badge-primary">{bookingClass.length}</span>
        </NavLink>
      </li>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./enroll-class"}
          className={({ isActive }) => (isActive ? "text-orange-300" : " ")}
        >
          <AiOutlineFileDone /> Enroll class{" "}
          <span className="badge badge-primary">{enrollClass.length}</span>
        </NavLink>
      </li>
      <li className="text-white text-xl capitalize">
        <NavLink
          to={"./payment-history"}
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
