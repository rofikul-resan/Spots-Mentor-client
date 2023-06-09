import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const CheckOut = ({ price, bookingClass }) => {
  const [cardError, setCardError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { axiosSecure } = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("http://localhost:5000/create-payment-intent", { price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError(null);
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName || "unknown",
            email: user.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      return setCardError(confirmError);
    }
    console.log(paymentIntent);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-6/12 mx-auto shadow-lg shadow-black/30 rounded-lg"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          className="my-3 p-4"
        />
        <div className="w-fit mx-auto">
          <button
            className="btn bg-orange-600 hover:bg-orange-800 text-white btn-sm px-5 mb-3"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-2xl text-center font-semibold text-red-600 mt-3">
          {cardError}
        </p>
      )}
    </>
  );
};

export default CheckOut;
