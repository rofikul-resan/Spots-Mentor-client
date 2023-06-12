import useUser from "../../../Hook/useUser";
import SectionHeader from "../../../Components/SectionHeader";
import axios from "axios";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { users, refetch } = useUser();

  const changeRoll = async (roll, id) => {
    const res = await axios.patch(`http://localhost:5000/users/${id}`, {
      roll: roll,
    });
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        icon: "success",
        title: `Make  ${roll} Successful `,
      });
    }
  };
  return (
    <div>
      <SectionHeader title={"Manage User"} />

      <div>
        <div className="overflow-x-auto w-9/12 mx-auto rounded-md">
          <h1 className="text-xl font-bold my-3 ms-1">
            {" "}
            Total User : {users.length}
          </h1>
          <table className="table table-zebra rounded-md overflow-hidden">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-orange-600 text-white">No.</th>
                <th className="bg-orange-600 text-white">Name</th>
                <th className="bg-orange-600 text-white">Email</th>
                <th className="bg-orange-600 text-white">Action</th>
                <th className="bg-orange-600 text-white">Admin</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{+index + 1}</th>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <th>
                    <button
                      disabled={
                        user.roll === "admin" || user.roll === "instructor"
                      }
                      onClick={() => changeRoll("instructor", user._id)}
                      className="btn btn-primary btn-xs"
                    >
                      Instructor{" "}
                    </button>
                  </th>
                  <th>
                    <button
                      disabled={user.roll === "admin"}
                      onClick={() => changeRoll("admin", user._id)}
                      className="btn btn-success btn-xs"
                    >
                      Admin{" "}
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

export default ManageUser;
