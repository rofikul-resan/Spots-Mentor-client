import Lottie from "lottie-react";
import animation404 from "/src/assets/98488-bot-error-404";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="min-h-screen flex  items-center justify-center">
      <div>
        <Lottie animationData={animation404} style={{ height: 400 }} />
        <div className="w-fit mx-auto">
          <Link to={"/"} className="btn btn-primary rounded-full btn-sm px-14">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
