import { AiFillHome } from "react-icons/ai";
import { GiBookCover, GiTeacher } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";
import InstructorLInk from "../Dashboard/Instructors/InstructorLInk";

const DashBoardLayout = () => {
  const roll = "instructors";
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
            Open drawer
          </label>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side" data-theme="dark">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className=" text-center my-10 mx-auto">
          <img src="/logo.jpg" alt="" className="w-12 mx-auto" />
          <h1 className="text-2xl font-bold">Sports-Mentor</h1>
        </div>
        <div className="mt-28 md:mt-6 mx-auto">
          <h3 className="text-white font-semibold text-xl text-center  uppercase">
            ----{`( ${roll} )`}----
          </h3>
          <ul className="menu p-4 w-80 h-full ">
            {/* Sidebar content here */}
            {roll === "student" ? (
              <>student Link</>
            ) : (
              <>{roll === "instructors" && <InstructorLInk />}</>
            )}
            <div className="divider"></div>
            <li>
              <Link to={"/"} className="text-white text-xl">
                <AiFillHome className="text-white text-2xl" /> Home
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-xl">
                <GiTeacher className="text-white text-2xl" /> Instructors
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-xl">
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