import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructor = () => {
  const { data: instructor = [], refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axios.get(
        "https://sports-mentor-server.vercel.app/instructor"
      );
      return res.data;
    },
  });
  return { instructor, refetch };
};

export default useInstructor;
