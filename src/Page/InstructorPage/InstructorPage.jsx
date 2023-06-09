import SectionHeader from "../../Components/SectionHeader";
import useInstructor from "../../Hook/useInstructor";
import InstructorCard from "../Home/PopularInstructor/InstructorCard";

const InstructorPage = () => {
  const { instructor } = useInstructor();
  return (
    <div>
      <SectionHeader title={"Meet Our All Instructor"} />
      <div className="grid grid-cols-3 gap-6 w-10/12 mx-auto">
        {instructor.map((ins) => (
          <InstructorCard key={ins._id} instructor={ins} />
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
