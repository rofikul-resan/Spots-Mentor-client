import { AiFillHome } from "react-icons/ai";
import { GiBookCover, GiTeacher } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";
import InstructorLInk from "../Dashboard/Instructors/InstructorLInk";
import AdminLink from "../Dashboard/Admin/AdminLink";
import useUserRoll from "../Hook/useUserRoll";
import StudentLink from "../Dashboard/Student/StudentLink";

const DashBoardLayout = () => {
  const { userRoll } = useUserRoll();
  const roll = userRoll.roll;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden w-full"
          >
            Open Menu
          </label>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side bg-base-300 z-20" data-theme="dark">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className=" text-center my-10 mx-auto">
          <img src="/logo.jpg" alt="" className="w-12 mx-auto" />
          <h1 className="text-2xl font-bold">Sports-Mentor</h1>
        </div>
        <div className="mt-28 md:mt-6 mx-auto">
          <div className="  mx-auto w-fit rounded-full ">
            <img
              src={userRoll?.photo}
              alt={userRoll?.name}
              className="w-32 rounded-full h-32 mx-auto border-4 border-white
              "
            />
          </div>
          <h1 className="font-semibold text-center text-2xl text-white my-3">
            Name : <span>{userRoll?.name}</span>
          </h1>
          <h3 className="text-white font-semibold text-xl text-center  uppercase">
            ----{`( ${roll} )`}----
          </h3>
          <ul className="menu p-4 w-80 h-full ">
            {/* Sidebar content here */}
            {roll === "student" ? (
              <StudentLink />
            ) : (
              <>
                {roll === "instructor" && <InstructorLInk />}
                {roll === "admin" && <AdminLink />}
              </>
            )}
            <div className="divider"></div>
            <li>
              <Link to={"/"} className="text-white text-xl">
                <AiFillHome className="text-white text-2xl" /> Home
              </Link>
            </li>
            <li>
              <Link to={"/instructors"} className="text-white text-xl">
                <GiTeacher className="text-white text-2xl" /> Instructors
              </Link>
            </li>
            <li>
              <Link to={"/class"} className="text-white text-xl">
                <GiBookCover className="text-white text-2xl" /> Class
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
