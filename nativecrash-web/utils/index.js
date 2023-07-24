import { useQuery, useMutation } from "react-query";
import axios from "axios";

export const useGetCrashReport = (uniqueIdentifier) => {
  return useQuery({
    queryFn: () => {
      const { data } = axios.get(`https://yucca-interface.vercel.app/crashreport?uid=${uniqueIdentifier}`);
      // const apiUrl = `https://api.example.com/endpoint?p=${encodedData}`;
      return data;
    },
  });
};
