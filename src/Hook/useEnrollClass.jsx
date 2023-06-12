import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useEnrollClass = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data: enrollClass = [], refetch } = useQuery({
    queryKey: ["enroll", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://sports-mentor-server.vercel.app/enroll/${user?.email}`
      );
      return res.data;
    },
  });
  return { enrollClass, refetch };
};

export default useEnrollClass;
