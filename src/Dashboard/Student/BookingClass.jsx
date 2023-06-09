import SectionHeader from "../../Components/SectionHeader";
import useBookingList from "../../Hook/useBookingList";

const BookingClass = () => {
  const { bookingClass } = useBookingList();
  const totalPrice = bookingClass.reduce((sum, cls) => sum + +cls.price, 0);
  return (
    <div className="mb-12">
      <SectionHeader title={"Your Booking Class"} />

      <div>
        <div className="overflow-x-auto w-9/12 mx-auto rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold my-3 ms-1">
              Total Booking : {bookingClass.length}
            </h1>
            <h1 className="text-xl font-bold my-3 ms-1">
              Total Price : $ {totalPrice}
            </h1>
            <button className="btn btn-xs hover:bg-orange-800 px-8 w-fit bg-orange-600 text-white">
              Pay
            </button>
          </div>
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
              {bookingClass.map((cls, index) => (
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

export default BookingClass;
