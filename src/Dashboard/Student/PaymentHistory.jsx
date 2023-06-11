import moment from "moment";
import SectionHeader from "../../Components/SectionHeader";
import usePayHistory from "../../Hook/usePayHistory";
import Payments from "../../Payment/Payments";

const PaymentHistory = () => {
  const { payHistory } = usePayHistory();
  const totalPrice = payHistory.reduce((sum, pay) => sum + +pay.amount, 0);

  return (
    <div className="mb-12">
      <Payments />
      <SectionHeader title={"Your Payment History"} />

      <div>
        <div className="overflow-x-auto px-10 mx-auto rounded-md">
          <div className="flex justify-between items-center mx-8">
            <h1 className="text-xl font-bold my-3 ms-1">
              Total Booking : {payHistory.length}
            </h1>
            <h1 className="text-xl font-bold my-3 ms-1">
              Total Payment Amount : $ {totalPrice}
            </h1>
          </div>
          <table className="table table-zebra rounded-md ">
            {/* head */}
            <thead>
              <tr className="rounded-t-md overflow-hidden">
                <th className="bg-orange-600  text-white">No.</th>
                <th className="bg-orange-600  text-white">Payment ID</th>
                <th className="bg-orange-600  text-white">Payment Time</th>
                <th className="bg-orange-600  text-white">Price</th>
                <th className="bg-orange-600  text-white">Class Quantity</th>
                <th className="bg-orange-600  text-white">Enroll class</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* row 1 */}
              {payHistory.map((payHis, index) => (
                <tr key={payHis._id}>
                  <th>{+index + 1}</th>

                  <td>{payHis._id}</td>
                  <td>
                    {moment(payHis.paymentTime).format("YYYY-MM-DD , h:mm:ss")}
                  </td>
                  <td> $ {payHis.amount}</td>
                  <td>{payHis.quantity}</td>
                  <td>
                    {" "}
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn bg-orange-600 hover:bg-orange-800 text-white m-1"
                      >
                        See All Class
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 z-10 rounded-md  bg-[#111111] w-52"
                      >
                        {payHis.allClassNames.map((cls, index) => (
                          <li key={index} className="font-semibold text-white">
                            <a> {cls}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default PaymentHistory;
