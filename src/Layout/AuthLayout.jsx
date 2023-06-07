import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import animation from "/src/assets/107385-login.json";
import Lottie from "lottie-react";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 place-items-center my-16">
        <div>
          <Lottie animationData={animation} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
