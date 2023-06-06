import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Outlet />
    </div>
  );
};

export default MainLayout;
