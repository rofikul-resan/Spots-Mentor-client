import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllClass = () => {
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/all-class");
      return res.data;
    },
  });
  return { allClass, refetch };
};

export default useAllClass;
