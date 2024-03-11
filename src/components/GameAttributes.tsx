import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItem
        term="Platforms"
        children={game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      />
      <DefinitionItem
        term="Metascore"
        children={<CriticScore score={game.metacritic} />}
      />
      <DefinitionItem
        term="Genres"
        children={game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      />
      <DefinitionItem
        term="Publishers"
        children={game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      />
    </SimpleGrid>
  );
};

export default GameAttributes;
