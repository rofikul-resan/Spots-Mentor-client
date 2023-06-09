import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment/moment";
AOS.init();
const ClassCard = ({ classes }) => {
  return (
    <div data-aos="flip-left">
      <div className="card bg-base-100 h-full shadow-xl">
        <figure className="h-64 overflow-hidden">
          <img
            src={classes?.classImg}
            alt={classes?.className}
            className="h-full"
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
                {classes?.enrollStudentId.length}{" "}
              </p>
              <p>
                <span className="font-semibold italic">Total Seats : </span>
                {classes?.availableSeats}{" "}
              </p>
            </div>
            <p>
              <span className="font-semibold italic">Available Seats : </span>
              {classes?.availableSeats - classes?.enrollStudentId.length}{" "}
            </p>
          </div>
          <div className="flex items-center">
            <p>{moment(classes?.postTime).fromNow()}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-gardant-s text-white rounded-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
