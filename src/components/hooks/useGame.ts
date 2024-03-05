import { useQuery } from "react-query";
import { GameQuery } from "../../App";
import apiClient, { FetchResponse } from "../api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Games>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGame;
