import { useQuery, useMutation } from "react-query";
import axios from "axios";

export const useGetCrashReport = (uniqueIdentifier) => {
  return useQuery({
    queryFn: () => {
      const { data } = axios.get("MY_URL_FETCH_FROM_SERVER_DB");
      // const apiUrl = `https://api.example.com/endpoint?p=${encodedData}`;
      return data;
    },
  });
};
