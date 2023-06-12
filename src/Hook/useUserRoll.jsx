import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserRoll = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data: userRoll = {}, refetch } = useQuery({
    queryKey: ["user-roll", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://sports-mentor-server.vercel.app/users?email=${user?.email}`
      );
      return res.data;
    },
  });
  return { userRoll, refetch };
};

export default useUserRoll;
