import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useBookingList from "../Hook/useBookingList";
import useEnrollClass from "../Hook/useEnrollClass";

const CheckOut = ({ price, bookingClass }) => {
  const [loading, setLoading] = useState(false);
  const [cardError, setCardError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { refetch: bookingRefetch } = useBookingList();
  const { refetch: enrollRefetch } = useEnrollClass();
  const { axiosSecure } = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("https://sports-mentor-server.vercel.app/create-payment-intent", {
          price,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);
  const handleSubmit = async (e) => {
    setLoading(true);
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
    setLoading(false);

    if (confirmError) {
      console.log(confirmError);
      return setCardError(confirmError.message);
    }
    console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const paymentHistory = {
        userName: user.displayName,
        paymentTime: new Date().getTime(),
        email: user.email,
        amount: price,
        quantity: bookingClass.length,
        allBookingId: bookingClass.map((cls) => cls._id),
        allClassNames: bookingClass.map((cls) => cls.className),
        allClassId: bookingClass.map((cls) => cls.classId),
        instructorEmails: bookingClass.map((cls) => cls.instructorEmail),
      };
      console.log(paymentHistory);
      axiosSecure
        .post(
          "https://sports-mentor-server.vercel.app/payments",
          paymentHistory
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            bookingRefetch();
            enrollRefetch();

            Swal.fire({
              icon: "success",
              title: "Payment successful",
            });
            navigate("/dashboard/booking-class");
          }
        });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-6/12 mx-auto shadow-lg shadow-black/30 rounded-lg bg-base-200"
      >
        <h1 className="text-xl font-semibold text-center capitalize">
          pay from strip
        </h1>
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
          className="my-3 p-4 "
        />
        <div className="w-fit mx-auto">
          <button
            className="btn bg-orange-600 hover:bg-orange-800 text-white btn-sm px-5 mb-3"
            type="submit"
            disabled={!stripe || !clientSecret || loading}
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
      {transactionId && (
        <p className="text-2xl text-center font-semibold text-orange-600 mt-3">
          Last Transaction from :{" "}
          <span className="font-bold">{transactionId}</span>
        </p>
      )}
    </>
  );
};

export default CheckOut;
