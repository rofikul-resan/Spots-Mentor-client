import ClassCard from "../../Components/ClassCard";
import SectionHeader from "../../Components/SectionHeader";
import useAllClass from "../../Hook/useAllClass";

const AllClassPage = () => {
  const { allClass } = useAllClass();
  const activeClass = allClass.filter((cls) => cls.status !== "pending");
  return (
    <div>
      <SectionHeader title={"See Our All Class"} />
      <div className="grid md:grid-cols-3 gap-6 w-10/12 mx-auto">
        {activeClass.map((cls) => (
          <ClassCard key={cls._id} classes={cls} />
        ))}
      </div>
    </div>
  );
};

export default AllClassPage;
