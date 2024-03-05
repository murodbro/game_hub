import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genres } from "./hooks/useGenres";
import getCroppedImageUrl from "./services/image-url";

interface Props {
  selectGenre: (genre: Genres) => void;
  onSelectGenre: Genres | null;
}

const GenresList = ({ selectGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="3xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                boxSize={"32px"}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === onSelectGenre?.id ? "bold" : "normal"}
                onClick={() => selectGenre(genre)}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
