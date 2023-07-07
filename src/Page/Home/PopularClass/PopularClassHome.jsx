import axios from "axios";
import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader";
import ClassCard from "../../../Components/ClassCard";

const PopularClassHome = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    axios
      .get("https://sports-mentor-server.vercel.app/top-class")
      .then((res) => setPopularClass(res.data));
  }, []);

  return (
    <div>
      <SectionHeader title={"Our Popular Class"} />
      <div className="md:w-10/12 mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {popularClass.map((classes) => (
            <ClassCard key={classes._id} classes={classes} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClassHome;
