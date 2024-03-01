import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "./hooks/useGame";
import GameCard from "./GameCard";
import GameGridSceleten from "./GameGridSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "./hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      padding={7}
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={7}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameGridSceleten />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
