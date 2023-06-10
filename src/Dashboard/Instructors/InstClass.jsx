import { Link } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";

const InstClass = () => {
  const { user } = useContext(AuthContext);
  const [instClass, setInstClass] = useState([]);
  const { axiosSecure } = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(`http://localhost:5000/inst-class?email=${user?.email}`)
      .then((res) => setInstClass(res.data));
  }, [user, axiosSecure]);
  return (
    <div className="mb-12">
      <SectionHeader title={"Your Class Details"} />

      <div>
        <div className="overflow-x-auto px-5 mx-auto rounded-md">
          <h1 className="text-xl font-bold my-3 ms-1">
            Total Class : {instClass.length}
          </h1>
          <table className="table table-zebra rounded-md overflow-hidden">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-orange-600 text-white">No.</th>
                <th className="bg-orange-600 text-white">class Name</th>
                <th className="bg-orange-600 text-white">Price</th>
                <th className="bg-orange-600 text-white">Total Enroll</th>
                <th className="bg-orange-600 text-white">Status</th>
                <th className="bg-orange-600 text-white">Feedback</th>
                <th className="bg-orange-600 text-white">Action</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* row 1 */}
              {instClass.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{+index + 1}</th>

                  <td>{cls.className}</td>
                  <td> $ {cls.price}</td>
                  <td>{cls.enrollStudentId?.length}</td>
                  <td>{cls.status}</td>
                  <td>{cls.feedback}</td>

                  <td>
                    <Link className="btn btn-xs btn-primary px-8 w-fit ">
                      update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstClass;
