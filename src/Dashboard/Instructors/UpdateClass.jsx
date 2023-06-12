import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

import Swal from "sweetalert2";
const UpdateClass = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);
  const { axiosSecure } = useAxiosSecure();
  const [cls, setCls] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .get(`https://sports-mentor-server.vercel.app/all-class/${id}`)
      .then((res) => {
        console.log(res.data);
        setCls(res.data);
      });
  }, [axiosSecure, id]);
  const handleUpdateClass = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const price = form.price.value;
    const availableSeats = form.availableSeats.value;
    const updateDoc = {
      className,
      price: +price,
      availableSeats: +availableSeats,
    };
    const res = await axiosSecure.patch(
      ` https://sports-mentor-server.vercel.app/all-class/${cls?._id}`,
      updateDoc
    );
    setLoading(false);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Class data Update Successful",
      });
      navigate("/dashboard/my-class");
    }
    console.log(res.data);
  };
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold text-center my-3">
        Update Your Class Information{" "}
      </h1>
      <div className="my-8">
        <div className="w-8/12 mx-auto my-4">
          <img
            src={cls?.classImg}
            alt={cls?.className}
            className="rounded-md w-96 h-64 mx-auto"
          />
          <div>
            <h1 className="text-3xl font-bold my-4">
              {" "}
              Class Name : {cls?.className}
            </h1>
            <div className="flex justify-between text-xl">
              <p>
                <span className="font-semibold italic">Total Seats : </span>
                {cls?.availableSeats}{" "}
              </p>
              <p>
                <span className="font-semibold italic">Total Student : </span>
                {cls?.enrollStudentId?.length}{" "}
              </p>
            </div>
            <div className="flex justify-between text-xl">
              <p>
                <span className="font-semibold italic">Price : $</span>
                {cls?.price}{" "}
              </p>
              <p>
                <span className="font-semibold italic">Available Seat : </span>
                {cls?.availableSeats - cls?.enrollStudentId?.length}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleUpdateClass}
        className="bg-base-300  w-fit p-10 mx-auto rounded-md shadow-xl shadow-black/50"
      >
        <div className="form-control w-full ">
          <label className="label">
            <span className="text-lg italic font-semibold">Class Name</span>
          </label>
          <input
            name="className"
            type="text"
            defaultValue={cls?.className}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex gap-6">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-lg italic font-semibold">Total seats</span>
            </label>
            <input
              name="availableSeats"
              type="number"
              defaultValue={cls?.availableSeats}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="text-lg italic font-semibold">Price</span>
            </label>
            <input
              name="price"
              type="number"
              defaultValue={cls?.price}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-6 btn-block shadow-md shadow-black hover:shadow-none"
        >
          Update class{" "}
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

export default UpdateClass;
