import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useUserRoll = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: userRoll = {}, refetch } = useQuery({
    queryKey: ["user-roll", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users?email=${user?.email}`
      );
      return res.data;
    },
  });
  return { userRoll, refetch };
};

export default useUserRoll;
