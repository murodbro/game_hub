import apiClient, { FetchResponse } from "../api-client";
import { useQuery } from "react-query";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenres;
