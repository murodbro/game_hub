import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CiriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize={"14px"} borderRadius={4} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CiriticScore;
