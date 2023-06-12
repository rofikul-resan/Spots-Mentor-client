import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to={"/auth/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivetRoute;
