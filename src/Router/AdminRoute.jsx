import { Navigate } from "react-router-dom";
import useUserRoll from "../Hook/useUserRoll";

const AdminRoute = ({ children }) => {
  const { userRoll } = useUserRoll();
  if (userRoll.roll === "admin") {
    return children;
  }
  return <Navigate to={"/"} />;
};

export default AdminRoute;
