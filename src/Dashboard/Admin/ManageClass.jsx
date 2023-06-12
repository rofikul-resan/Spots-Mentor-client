import Swal from "sweetalert2";
import SectionHeader from "../../Components/SectionHeader";
import useAllClass from "../../Hook/useAllClass";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import FeedbackModal from "./FeedbackModal";
import { useState } from "react";

const ManageClass = () => {
  const { axiosSecure } = useAxiosSecure();
  const { allClass, refetch } = useAllClass();
  const [feedbackId, setFeedbackId] = useState(null);

  const changeStatus = async (status, id) => {
    const res = await axiosSecure.patch(
      `http://localhost:5000/class-status/${id}`,
      {
        status: status,
      }
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        icon: "success",
        title: `Class  ${status} Successful `,
      });
    }
  };
  return (
    <div>
      <FeedbackModal feedbackId={feedbackId} />
      <SectionHeader title={"Manage Class"} />

      <div className="w-full">
        <div className="overflow-x-auto px-6 mx-auto rounded-md">
          <h1 className="text-xl font-bold my-3 ms-1">
            {" "}
            Total class : {allClass.length}
          </h1>
          <table className="table table-zebra rounded-md overflow-hidden">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-orange-600 w-fit px-1 text-white">No.</th>
                <th className="bg-orange-600 w-fit px-1 text-white">Image</th>
                <th className="bg-orange-600 w-fit px-1 text-white">Name</th>
                <th className="bg-orange-600 w-fit px-1 text-white">
                  {" "}
                  Inst. Name
                </th>
                <th className="bg-orange-600 w-fit px-1 text-white">
                  {" "}
                  Inst. Email
                </th>
                <th className="bg-orange-600 w-fit px-1 text-white">
                  {" "}
                  Total seats
                </th>
                <th className="bg-orange-600 w-fit px-1 text-white"> Price</th>
                <th className="bg-orange-600 w-fit px-1 text-white"> Status</th>
                <th className="bg-orange-600 w-fit px-1 text-white">Action</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* row 1 */}
              {allClass.map((cls, index) => (
                <tr key={cls._id}>
                  <th className="px-1">{+index + 1}</th>

                  <td className="px-1">
                    <div className="avatar">
                      <div className="w-16 mx-auto mask mask-hexagon">
                        <img src={cls.classImg} />
                      </div>
                    </div>
                  </td>
                  <td className="px-1">{cls.className}</td>
                  <td className="px-1 w-fit">{cls.instructorName}</td>
                  <td className="px-1">{cls.email}</td>
                  <td className="px-1 text-center">{cls.availableSeats}</td>
                  <td className="px-1">$ {cls.price}</td>
                  <td className="px-1">{cls.status}</td>
                  <th className="px-1">
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => changeStatus("approved", cls._id)}
                        disabled={cls.status !== "pending"}
                        className="btn btn-primary btn-xs"
                      >
                        Approve{" "}
                      </button>
                      <button
                        onClick={() => changeStatus("deny", cls._id)}
                        disabled={cls.status !== "pending"}
                        className="btn btn-success bg-red-800 text-white btn-xs"
                      >
                        Deny{" "}
                      </button>
                      <button
                        onClick={() => {
                          setFeedbackId(cls._id);
                          window.feedback_modal.showModal();
                        }}
                        className="btn btn-warning text-white btn-xs"
                      >
                        Feedback{" "}
                      </button>
                    </div>
                  </th>
                  <th className="px-1"></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClass;
