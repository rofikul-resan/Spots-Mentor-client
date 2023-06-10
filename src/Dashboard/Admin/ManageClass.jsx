import Swal from "sweetalert2";
import SectionHeader from "../../Components/SectionHeader";
import useAllClass from "../../Hook/useAllClass";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const ManageClass = () => {
  const { axiosSecure } = useAxiosSecure();
  const { allClass, refetch } = useAllClass();
  const changeStatus = async (status, id) => {
    const res = await axiosSecure.patch(
      `http://localhost:5000/class-status/${id}`,
      {
        status: status,
      }
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        icon: "success",
        title: `Class  ${status} Successful `,
      });
    }
  };
  return (
    <div>
      <SectionHeader title={"Manage Class"} />

      <div>
        <div className="overflow-x-auto w-11/12 mx-auto rounded-md">
          <h1 className="text-xl font-bold my-3 ms-1">
            {" "}
            Total cls : {allClass.length}
          </h1>
          <table className="table table-zebra rounded-md overflow-hidden">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-orange-600 text-white">No.</th>
                <th className="bg-orange-600 text-white">Name</th>
                <th className="bg-orange-600 text-white"> Inst. Email</th>
                <th className="bg-orange-600 text-white"> Price</th>
                <th className="bg-orange-600 text-white"> Status</th>
                <th className="bg-orange-600 text-white">Action</th>
                <th className="bg-orange-600 text-white">Deny </th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* row 1 */}
              {allClass.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{+index + 1}</th>

                  <td>{cls.className}</td>
                  <td>{cls.email}</td>
                  <td>$ {cls.price}</td>
                  <td>{cls.status}</td>
                  <th>
                    <button
                      onClick={() => changeStatus("approved", cls._id)}
                      disabled={cls.status !== "pending"}
                      className="btn btn-primary btn-xs"
                    >
                      Approve{" "}
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => changeStatus("deny", cls._id)}
                      disabled={cls.status !== "pending"}
                      className="btn btn-success bg-red-800 text-white btn-xs"
                    >
                      Deny{" "}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClass;
