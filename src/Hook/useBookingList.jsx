import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBookingList = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data: bookingClass = [], refetch } = useQuery({
    queryKey: ["instructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/booking/${user?.email}`
      );
      return res.data;
    },
  });
  return { bookingClass, refetch };
};

export default useBookingList;
