import { Box } from "@chakra-ui/react";
import useMovie from "../hooks/useMovies";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: movie, error, isLoading } = useMovie(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = movie?.results[0];

  if (!first) return null;

  return (
    <Box paddingY={3}>
      <video src={first.data[480]} poster={first.preview} controls></video>
    </Box>
  );
};

export default GameTrailer;
