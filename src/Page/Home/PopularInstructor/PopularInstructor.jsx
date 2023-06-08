import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader";
import axios from "axios";
import InstructorCard from "./InstructorCard";

const PopularInstructor = () => {
  const [popularInstructors, setPopularInstructor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/popular-instructor")
      .then((res) => setPopularInstructor(res.data));
  });
  return (
    <div>
      <SectionHeader title={"Our Popular Instructor"} />
      <div className="grid grid-cols-3 gap-6 md:w-10/12 mx-auto p-6">
        {popularInstructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
