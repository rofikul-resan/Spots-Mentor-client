import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { FidgetSpinner } from "react-loader-spinner";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const AddClass = () => {
  const { axiosSecure } = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [instructor, setInstructor] = useState({});
  const { user } = useContext(AuthContext);

  const postTime = new Date().getTime();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    setInstructor(user);
  }, [user]);

  const validateFile = (file) => {
    if (!file[0].type.includes("image")) {
      return "Only image files are allowed.";
    }

    if (file[0].size > 2 * 1024 * 1024) {
      return "File size must be less than 2MB.";
    }
  };

  const handleAddClass = (data) => {
    setLoading(true);
    const { className, price, availableSeats } = data;
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMG_API
    }`;
    const formData = new FormData();
    formData.append("image", data.image[0]);
    axios.post(url, formData).then((res) => {
      const classImg = res.data.data.display_url;
      const classData = {
        className,
        instructorName: instructor.displayName,
        email: instructor.email,
        price: +price,
        availableSeats: +availableSeats,
        classImg,
        postTime: +postTime,
        enrollStudentId: [],
        status: "pending",
      };
      axiosSecure
        .post("http://localhost:5000/add-class", classData)
        .then((res) => {
          console.log(res.data);
          if (res.data.result.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Class Add Successful",
            });
            reset();
            setLoading(false);
          }
        });
    });
  };
  return (
    <div>
      <div className="my-8">
        <h1 className="text-3xl font-bold text-center">Add Your New Class</h1>
      </div>
      <form
        onSubmit={handleSubmit(handleAddClass)}
        className="bg-base-300  w-fit p-10 mx-auto rounded-md shadow-xl shadow-black/50"
      >
        <div className="form-control w-full ">
          <label className="label">
            <span className="text-lg italic font-semibold">Class Name</span>
          </label>
          <input
            {...register("className", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold italic">Class Photo</span>
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
        <div className="flex gap-6">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-lg italic font-semibold">
                Instructor Name
              </span>
            </label>
            <input
              {...register("instructorName")}
              type="text"
              defaultValue={instructor?.displayName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-lg italic font-semibold">
                Instructor Email
              </span>
            </label>
            <input
              {...register("email")}
              type="email"
              defaultValue={instructor?.email}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              readOnly
            />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-lg italic font-semibold">
                Available seats
              </span>
            </label>
            <input
              {...register("availableSeats", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-lg italic font-semibold">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-6 btn-block shadow-md shadow-black hover:shadow-none"
        >
          Add class{" "}
          {loading && (
            <FidgetSpinner
              visible={true}
              height={"20"}
              ariaLabel="dna-loading"
              wrapperClass="dna-wrapper"
              backgroundColor="#fff"
            />
          )}
        </button>
      </form>
    </div>
  );
};

export default AddClass;
