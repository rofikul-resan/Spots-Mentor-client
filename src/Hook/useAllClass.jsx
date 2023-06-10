import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClass = () => {
  const { axiosSecure } = useAxiosSecure();
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axiosSecure.get("http://localhost:5000/all-class");
      return res.data;
    },
  });
  return { allClass, refetch };
};

export default useAllClass;
