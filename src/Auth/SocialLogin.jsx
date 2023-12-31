import axios from "axios";
import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate("/");
        axios
          .post("https://sports-mentor-server.vercel.app/add-users", {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            roll: "student",
          })
          .then((data) => {
            console.log(data.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" mt-8">
      <p className="text-center font-semibold mb-3">Or sign in with</p>
      <div className="mx-auto w-fit">
        <button
          onClick={handleGoogleLogin}
          className="border-2  rounded-full border-gray-700 hover:-translate-y-1 hover:shadow-xl shadow-black hover:scale-105 duration-300"
        >
          {" "}
          <BsGoogle className="text-xl m-3" />{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
