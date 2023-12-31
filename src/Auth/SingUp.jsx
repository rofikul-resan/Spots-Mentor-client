import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FidgetSpinner } from "react-loader-spinner";
import Swal from "sweetalert2";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const SingUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShowC, setIsShowC] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const validatePassword = (value) => {
    // Password validation logic
    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }

    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one capital letter";
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return "Password must contain at least one special character";
    }

    return true;
  };
  const validateFile = (file) => {
    console.log("file", file);
    if (!file) {
      return "File is required.";
    }

    if (!file[0].type.includes("image")) {
      return "Only image files are allowed.";
    }

    if (file[0].size > 2 * 1024 * 1024) {
      return "File size must be less than 2MB.";
    }

    return true;
  };

  const handleSingUp = (data) => {
    setLoading(true);
    const { name, password, email, confirmPass } = data;
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    if (password === confirmPass) {
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMG_API
      }`;
      axios
        .post(url, formData)
        .then((res) => {
          const image = res.data.data.display_url;
          createUser(email, password)
            .then(() => {
              updateUser(name, image)
                .then(async () => {
                  const res = await axios.post(
                    "https://sports-mentor-server.vercel.app/add-users",
                    {
                      name: name,
                      email: email,
                      photo: image,
                      roll: "student",
                    }
                  );
                  console.log(res);
                  reset();
                  Swal.fire({
                    icon: "success",
                    title: "Sing Up Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                  setLoading(false);
                })
                .catch((err) => console.log(err));
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
    }
  };
  return (
    <div className="rounded-2xl shadow-xl shadow-black/50 p-10 w-9/12 mx-auto bg-base-200">
      <h1 className="text-4xl text-center font-semibold ">Register !</h1>
      <form onSubmit={handleSubmit(handleSingUp)}>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold italic">Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold italic">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
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
            {...register("password", {
              required: true,
              validate: validatePassword,
            })}
            type={isShow ? "text" : "password"}
            placeholder="Your Password"
            className="input input-bordered"
          />
        </div>
        {errors.password && (
          <span className="text-red-600 font-semibold ml-3">
            {errors.password.message}
          </span>
        )}
        <div className="form-control relative">
          <button
            type="button"
            onClick={() => setIsShowC(!isShowC)}
            className="text-xl absolute bottom-3 right-3"
          >
            {isShowC ? <ImEye /> : <ImEyeBlocked />}
          </button>
          <label className="label">
            <span className="text-lg font-semibold italic">
              Confirm Password
            </span>
          </label>
          <input
            {...register("confirmPass", {
              required: true,
              validate: validatePassword,
            })}
            type={isShow ? "text" : "password"}
            placeholder="Confirm  Password"
            className="input input-bordered"
          />
        </div>
        {errors.password && (
          <span className="text-red-600 font-semibold ml-3">
            {errors.password.message}
          </span>
        )}

        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold italic">Your Photo</span>
          </label>
          <input
            {...register("image", { validate: validateFile })}
            type="file"
            className="file-input file-input-bordered file-input-md w-full"
          />
          {errors.image && (
            <p className="mt-1 text-sm font-semibold ml-2">
              {errors.image.message}
            </p>
          )}
        </div>

        <div className="form-control mt-1">
          <button
            type="submit"
            className="btn btn-block btn-primary mt-8 border-b-4 border-black border-0  gap-1 "
          >
            Sing Up{" "}
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
          </button>{" "}
        </div>
      </form>
      <div>
        <p className="mt-4">
          Already have an account ?{" "}
          <Link
            to={"/auth/login"}
            className="text-sm font-semibold text-orange-700 link link-hover"
          >
            Log in
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

export default SingUp;
