import { loadStripe } from "@stripe/stripe-js";
import useBookingList from "../Hook/useBookingList";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const Payments = () => {
  const { bookingClass } = useBookingList();
  const totalPrice = bookingClass.reduce((sum, cls) => sum + +cls.price, 0);
  const stripePromise = loadStripe(import.meta.env.VITE_PAY_KEY);
  return (
    <div>
      <div className=" mt-24 ">
        <h1 className="text-2xl font-bold text-center my-3 w-1/2 mx-auto pb-1 border-b border-orange-600">
          Total Payment Dew : {totalPrice.toFixed()}{" "}
        </h1>
        <Elements stripe={stripePromise}>
          <CheckOut price={totalPrice} bookingClass={bookingClass} />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
