import { useContext } from "react";
import animation from "/src/assets/36621-sports-app-loading-indicator";
import Lottie from "lottie-react";
import { AuthContext } from "../Provider/AuthProvider";
import { Fade } from "react-awesome-reveal";

const WellComePage = ({ children }) => {
  const { initLoading } = useContext(AuthContext);
  if (initLoading) {
    return (
      <div className="flex min-h-screen justify-center items-start">
        <div className="text-center my-10">
          <Lottie animationData={animation} style={{ height: "400px" }} />
          <h1 className="text-5xl font-bold animate-pulse">
            Welcome to Sports Mentor
          </h1>
          <Fade delay={1e3} cascade damping={1e-1}>
            <h4 className="text-3xl font-semibold">
              Enjoy your Summer Vacation
            </h4>
          </Fade>
        </div>
      </div>
    );
  }
  return children;
};

export default WellComePage;
