import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;
    console.log(data);
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
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold italic">Password</span>
          </label>
          <input
            {...register("password", { required: true })}
            type="text"
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
            className="btn btn-block btn-primary mt-8 border-b-4 border-black border-0  "
          >
            Log In
          </button>{" "}
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
