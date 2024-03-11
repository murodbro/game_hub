import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const Expandable = ({ children }: Props) => {
  const [expanded, setExpand] = useState(false);

  if (!children) return null;

  if (children.length < 300) return <Text>{children}</Text>;

  const limit = 300;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpand(!expanded)}
        marginLeft={3}
        color={"yellow"}
        size="sm"
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default Expandable;
