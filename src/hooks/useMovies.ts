import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import { Movies } from "../entities/Movie";

const useMovie = (id: number) => {
  const apiClient = new APICLient<Movies>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ["movies", id],
    queryFn: apiClient.getAll,
  });
};

export default useMovie;
