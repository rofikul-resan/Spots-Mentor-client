import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/all-users`);
      return res.data;
    },
  });
  return { users, refetch };
};

export default useUser;
