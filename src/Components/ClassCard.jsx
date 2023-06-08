import Aos from "aos";
import AOS from "aos";
import "aos/dist/aos.css";
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
                {classes?.enrollStudent}{" "}
              </p>
              <p>
                <span className="font-semibold italic">Total Seats : </span>
                {classes?.availableSeats}{" "}
              </p>
            </div>
            <p>
              <span className="font-semibold italic">Available Seats : </span>
              {classes?.availableSeats - classes?.enrollStudent}{" "}
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-gardant-s text-white rounded-sm">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
