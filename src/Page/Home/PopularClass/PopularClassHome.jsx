import axios from "axios";
import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader";
import ClassCard from "../../../Components/ClassCard";

const PopularClassHome = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/top-class")
      .then((res) => setPopularClass(res.data));
  }, []);

  return (
    <div>
      <SectionHeader title={"Popular class"} />
      <div className="md:w-10/12 mx-auto p-6">
        <div className="grid grid-cols-3 gap-6">
          {popularClass.map((classes) => (
            <ClassCard key={classes._id} classes={classes} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClassHome;
