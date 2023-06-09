import Aos from "aos";

Aos.init();
const InstructorCard = ({ instructor }) => {
  return (
    <div data-aos="flip-left">
      <div className="card bg-base-100 h-full shadow-xl">
        <figure className="h-64 overflow-hidden">
          <img
            src={instructor?.photo}
            alt={instructor?.name}
            className="h-full w-full"
          />
        </figure>
        <div className="card-body justify-between">
          <h2 className="card-title text-xl">
            Name : <span className="capitalize"> {instructor?.name}</span>
          </h2>
          <div>
            <p>
              <span className="font-semibold italic">Email: </span>
              {instructor?.email}{" "}
            </p>
            <p>
              <span className="font-semibold italic">Total Student: </span>
              {instructor?.allStudent}{" "}
            </p>
            <div className="flex justify-between">
              <p>
                <span className="font-semibold italic">Total class : </span>
                {instructor?.allClass?.length}{" "}
              </p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-gardant-s text-white rounded-sm">
              See Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
