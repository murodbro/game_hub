import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "./hooks/useGame";
import PlatformsList from "./PlatformsIconList";
import CiriticScore from "./CriticScore";
import getCroppedImageUrl from "./services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent={"space-between"}>
          <PlatformsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CiriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
