import useUserRoll from "../Hook/useUserRoll";
import { Navigate } from "react-router-dom";

const InstructorRoute = ({ children }) => {
  const { userRoll } = useUserRoll();
  if (userRoll.roll === "instructor") {
    return children;
  }
  return <Navigate to={"/"} />;
};

export default InstructorRoute;
