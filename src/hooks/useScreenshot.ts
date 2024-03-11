import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

const useScreenshot = (id: number) => {
  const apiClient = new APICLient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["screenshot", id],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
