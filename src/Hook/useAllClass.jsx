import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClass = () => {
  const { axiosSecure } = useAxiosSecure();
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "https://sports-mentor-server.vercel.app/all-class"
      );
      return res.data;
    },
  });
  return { allClass, refetch };
};

export default useAllClass;
