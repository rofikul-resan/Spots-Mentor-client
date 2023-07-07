import SectionHeader from "../../../Components/SectionHeader";
import { BsCheckCircleFill } from "react-icons/bs";

const AboutSection = () => {
  return (
    <div>
      <SectionHeader title={"About Us"} />
      <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-6 ">
        <div className="space-y-5">
          <h1 className="text-4xl text-gray-800 font-bold">
            WE ARE THE BEST SUMMER CAMP!
          </h1>
          <div>
            <p className="font-semibold text-justify w-10/12">
              <span className="text-orange-500 text-xl ">
                Hills Camp is for Boys and Girls.
              </span>{" "}
              Nestled on the sandy beaches of beautiful Lake Ossipee amidst the
              White Mountains of New Hampshire, Camp offers a summer experience
              rich in fun, friendship, learning and adventure. Campers range in
              age from seven to fifteen.
            </p>
            <button className="btn btn-gardant-s rounded-full text-white mt-6">
              Find out More
            </button>
          </div>
        </div>
        <div className="w-fit mx-auto mb-8">
          <h1 className="text-4xl text-gray-800 font-bold">FACILITIES</h1>
          <ul className="flex flex-col justify-between gap-2 mt-5 font-semibold text-xl ">
            <li>
              <p>
                <span>
                  <BsCheckCircleFill className="text-orange-800 inline" />
                </span>{" "}
                BOYS & GIRLS
              </p>
            </li>
            <li>
              <p>
                <span>
                  <BsCheckCircleFill className="text-orange-800 inline" />
                </span>{" "}
                AGES 7-15
              </p>
            </li>
            <li>
              <p>
                <span>
                  <BsCheckCircleFill className="text-orange-800 inline" />
                </span>{" "}
                TEAM & INDIVIDUAL SPORTS
              </p>
            </li>
            <li>
              <p>
                <span>
                  <BsCheckCircleFill className="text-orange-800 inline" />
                </span>{" "}
                PERFORMING & CREATIVE ARTS
              </p>
            </li>
            <li>
              <p>
                <span>
                  <BsCheckCircleFill className="text-orange-800 inline" />
                </span>{" "}
                WATERFRONT ACTIVITIES
              </p>
            </li>
            <li>
              <p>
                <span>
                  <BsCheckCircleFill className="text-orange-800 inline" />
                </span>{" "}
                SPECIAL EVENTS & TRIPS
              </p>
            </li>
            <li>
              <p>
                <span>
                  <BsCheckCircleFill className="text-orange-800 inline" />
                </span>{" "}
                PROFESSIONAL STAFF
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
