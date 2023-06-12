import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useEffect, useState } from "react";
import SingleCheckOut from "./SingleCheckOut";
const SinglePayment = () => {
  const params = useParams();
  console.log(params.id);
  const { axiosSecure } = useAxiosSecure();
  const [product, setProduct] = useState({});
  const stripePromise = loadStripe(import.meta.env.VITE_PAY_KEY);
  useEffect(() => {
    axiosSecure
      .get(`http://localhost:5000/payment/booking/${params.id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      });
  }, [axiosSecure, params]);

  return (
    <div>
      <div className="min-h-screen mt-24 ">
        <h1 className="text-2xl font-bold text-center my-3 w-1/2 mx-auto pb-1 border-b border-orange-600">
          Total payment : {product?.price}{" "}
        </h1>
        <Elements stripe={stripePromise}>
          <SingleCheckOut price={product?.price} product={product} />
        </Elements>
      </div>
    </div>
  );
};
export default SinglePayment;
