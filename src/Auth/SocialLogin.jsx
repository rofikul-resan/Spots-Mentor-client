import { useContext } from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  // const { googleLogin } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const handleGoogleLogin = () => {
  //   googleLogin()
  //     .then((res) => {
  //       const user = res.user;
  //       navigate("/");
  //       axios
  //         .post("http://localhost:5000/users", {
  //           name: user.displayName,
  //           email: user.email,
  //         })
  //         .then((data) => {
  //           console.log(data.data);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div className=" my-8">
      <p className="text-center font-semibold">Or sign in with</p>
      <div className="grid w-fit mx-auto my-4 grid-cols-3 gap-6">
        <button className="border-2 rounded-full border-gray-700 hover:-translate-y-1 hover:shadow-xl shadow-black hover:scale-105 duration-300">
          {" "}
          <BsFacebook className="text-xl m-3" />{" "}
        </button>
        <button
          // onClick={handleGoogleLogin}
          className="border-2 rounded-full border-gray-700 hover:-translate-y-1 hover:shadow-xl shadow-black hover:scale-105 duration-300"
        >
          {" "}
          <BsGoogle className="text-xl m-3" />{" "}
        </button>
        <button className="border-2 rounded-full border-gray-700 hover:-translate-y-1 hover:shadow-xl shadow-black hover:scale-105 duration-300">
          {" "}
          <BsGithub className="text-xl m-3" />{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
