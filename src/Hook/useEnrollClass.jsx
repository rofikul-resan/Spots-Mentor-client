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
        `http://localhost:5000/enroll/${user?.email}`
      );
      return res.data;
    },
  });
  console.log(enrollClass);
  return { enrollClass, refetch };
};

export default useEnrollClass;
