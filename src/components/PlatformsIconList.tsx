import {
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "./hooks/useGame";

interface Props {
  platforms: Platform[];
}

const PlatformsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };

  return (
    <HStack color="#718096" paddingY={1}>
      {platforms.map((platform) => {
        return <Icon key={platform.id} as={iconMap[platform.slug]}></Icon>;
      })}
    </HStack>
  );
};

export default PlatformsList;
