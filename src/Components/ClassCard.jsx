import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment/moment";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { Bars } from "react-loader-spinner";
import useUserRoll from "../Hook/useUserRoll";
import useAllClass from "../Hook/useAllClass";
AOS.init();
const ClassCard = ({ classes }) => {
  const { refetch } = useAllClass();
  const [loading, setLoading] = useState(false);
  const { userRoll } = useUserRoll();
  const { axiosSecure } = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleBooking = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "login First for booking",
      });
      return navigate("/auth/login", { state: location.pathname });
    } else {
      setLoading(true);
      const bookingData = {
        classId: classes._id,
        selectTime: new Date().getTime(),
        className: classes.className,
        instructorEmail: classes.email,
        studentEmail: user.email,
        price: classes.price,
      };
      const res = await axiosSecure.post(
        "https://sports-mentor-server.vercel.app/booking",
        bookingData
      );
      setLoading(false);
      if (res.data.insertedId) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Booking done",
          text: "To start class Pay Now",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      console.log();
    }
  };
  return (
    <div data-aos="zoom-in">
      <div
        className={`card glass bg-base-100 h-full shadow-xl duration-150 hover:-translate-y-3 overflow-hidden ${
          classes?.availableSeats - classes?.enrollStudentId?.length === 0 &&
          "bg-red-500"
        } `}
      >
        {loading && (
          <div className="absolute inset-0 z-10 bg-black/50 grid place-items-center">
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
            />
          </div>
        )}
        <figure className="h-64 overflow-hidden">
          <img
            src={classes?.classImg}
            alt={classes?.className}
            className="h-full w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{classes?.className}</h2>
          <div>
            <p>
              <span className="font-semibold italic">Instructor Name :</span>{" "}
              {classes?.instructorName}{" "}
            </p>
            <p>
              <span className="font-semibold italic">Price:</span> $
              {classes?.price}{" "}
            </p>
            <div className="flex justify-between">
              <p>
                <span className="font-semibold italic">Total Student : </span>
                {classes?.enrollStudentId?.length}{" "}
              </p>
              <p>
                <span className="font-semibold italic">Total Seats : </span>
                {classes?.availableSeats}{" "}
              </p>
            </div>
            <p>
              <span className="font-semibold italic">Available Seats : </span>
              {classes?.availableSeats - classes?.enrollStudentId?.length}{" "}
            </p>
          </div>
          <div className="mb-3">
            <div className="card-actions justify-end">
              <button
                disabled={
                  classes?.availableSeats - classes?.enrollStudentId?.length ===
                    0 ||
                  userRoll.roll === "admin" ||
                  userRoll.roll === "instructor"
                }
                onClick={handleBooking}
                className="btn btn-gardant-s text-white rounded-sm disabled:opacity-30 disabled:text-black"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="absolute inset-x-0 bg-orange-500/40 py-1 bottom-0 text-center font-semibold">
            {" "}
            <p>{moment(classes?.postTime).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
