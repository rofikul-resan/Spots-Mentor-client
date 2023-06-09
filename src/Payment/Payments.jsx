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
      <div>
        <h1>Total payment : {totalPrice.toFixed()} </h1>
        <Elements stripe={stripePromise}>
          <CheckOut price={totalPrice} bookingClass={bookingClass} />
        </Elements>
      </div>
    </div>
  );
};

export default Payments;
