import SectionHeader from "../../Components/SectionHeader";
import useEnrollClass from "../../Hook/useEnrollClass";

const EnrollClass = () => {
  const { enrollClass } = useEnrollClass();
  return (
    <div className="mb-12">
      <SectionHeader title={"Your Enroll Class"} />

      <div>
        <div className="overflow-x-auto w-9/12 mx-auto rounded-md">
          <h1 className="text-xl font-bold my-3 ms-1">
            Total Enroll : {enrollClass.length}
          </h1>
          <table className="table table-zebra rounded-md overflow-hidden">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-orange-600 text-white">No.</th>
                <th className="bg-orange-600 text-white">class Name</th>
                <th className="bg-orange-600 text-white">Price</th>
                <th className="bg-orange-600 text-white">Instructor Email</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* row 1 */}
              {enrollClass.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{+index + 1}</th>

                  <td>{cls.className}</td>
                  <td> $ {cls.price}</td>
                  <td>{cls.instructorEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrollClass;
