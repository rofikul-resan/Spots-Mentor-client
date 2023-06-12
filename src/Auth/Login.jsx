import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FidgetSpinner } from "react-loader-spinner";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state;
  console.log(from);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = (data) => {
    setLoading(true);
    const { email, password } = data;
    login(email, password)
      .then(() => {
        reset();
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire({
          icon: "warning",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="rounded-2xl shadow-xl shadow-black/50 p-10 w-9/12 mx-auto bg-base-200">
      <h1 className="text-4xl text-center font-semibold mb-6">Login !</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold italic">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="Your Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control relative">
          <button
            type="button"
            onClick={() => setIsShow(!isShow)}
            className="text-xl absolute bottom-3 right-3"
          >
            {isShow ? <ImEye /> : <ImEyeBlocked />}
          </button>
          <label className="label">
            <span className="text-lg font-semibold italic">Password</span>
          </label>
          <input
            {...register("password", { required: true })}
            type={isShow ? "text" : "password"}
            placeholder="Your Password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-1">
          <p className="link link-hover text-red-600 ">Forget Password</p>
        </div>
        <div className="form-control mt-1">
          <button
            type="submit"
            className="btn btn-block btn-primary mt-8 border-b-4 border-black border-0 gap-1 "
          >
            Log In
            {loading && (
              <FidgetSpinner
                visible={true}
                height={"20"}
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                backgroundColor="#fff"
              />
            )}
          </button>
        </div>
      </form>
      <div>
        <p className="mt-4">
          Do not have an account ?{" "}
          <Link
            to={"/auth/sing-up"}
            className="text-sm font-semibold text-orange-700 link link-hover"
          >
            Sing Up
          </Link>{" "}
        </p>
      </div>
      <div>
        <div className="divider">OR</div>
        <div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
