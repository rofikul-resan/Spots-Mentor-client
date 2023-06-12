import { Link } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader";
import useBookingList from "../../Hook/useBookingList";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const BookingClass = () => {
  const { bookingClass, refetch } = useBookingList();
  const totalPrice = bookingClass.reduce((sum, cls) => sum + +cls.price, 0);
  const { axiosSecure } = useAxiosSecure();

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(
          `http://localhost:5000/booking/${id}`
        );
        if (res.data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          refetch();
        }
      }
    });
  };
  return (
    <div className="mb-12">
      <SectionHeader title={"Your Booking Class"} />

      <div>
        <div className="overflow-x-auto px-5 mx-auto rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold my-3 ms-1">
              Total Booking : {bookingClass.length}
            </h1>
            <h1 className="text-xl font-bold my-3 ms-1">
              Total Price : $ {totalPrice}
            </h1>
            <Link
              to={"/dashboard/payment"}
              className="btn btn-xs hover:bg-orange-800 px-8 w-fit bg-orange-600 text-white"
            >
              Pay all
            </Link>
          </div>
          <table className="table table-zebra rounded-md overflow-hidden">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-orange-600 text-white">No.</th>
                <th className="bg-orange-600 text-white">class Name</th>
                <th className="bg-orange-600 text-white">Price</th>
                <th className="bg-orange-600 text-white">Instructor Email</th>
                <th className="bg-orange-600 text-white">Payment</th>
                <th className="bg-orange-600 text-white">Action</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* row 1 */}
              {bookingClass.map((cls, index) => (
                <tr key={cls._id}>
                  <th>{+index + 1}</th>

                  <td>{cls.className}</td>
                  <td> $ {cls.price}</td>
                  <td>{cls.instructorEmail}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/dashboard/payment/${cls._id}`}
                      className="btn btn-xs hover:bg-orange-800 px-8 w-fit bg-orange-600 text-white"
                    >
                      Pay
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDelete(cls._id)}
                      className="btn btn-xs hover:bg-red-800 px-8 w-fit bg-red-600 text-white"
                    >
                      delete
                    </button>
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

export default BookingClass;
