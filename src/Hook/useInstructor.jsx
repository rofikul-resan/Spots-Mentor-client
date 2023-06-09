import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructor = () => {
  const { data: instructor = [], refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/instructor");
      return res.data;
    },
  });
  return { instructor, refetch };
};

export default useInstructor;
