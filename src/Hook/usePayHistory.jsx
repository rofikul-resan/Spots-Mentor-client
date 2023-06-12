import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const usePayHistory = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data: payHistory = [], refetch } = useQuery({
    queryKey: ["payment-history", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://sports-mentor-server.vercel.app/payment-history?email=${user?.email}`
      );
      return res.data;
    },
  });
  return { payHistory, refetch };
};

export default usePayHistory;
