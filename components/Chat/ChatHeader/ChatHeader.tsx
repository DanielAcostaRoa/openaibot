import { BsBell } from "react-icons/bs";
import Image from "next/image";
import Wrapper, {
  User,
  Info,
  Name,
  Indicator,
  Button,
} from "./ChatHeader.styled";

const ChatHeader = () => {
  return (
    <Wrapper>
      <User>
        <Image
          src="/iBot.jpg"
          width={44}
          height={44}
          objectFit="cover"
          alt="iBot"
        />
        <Info>
          <Name>{"iBot"}</Name>
          <Indicator />
        </Info>
      </User>
      <Button>
        <BsBell />
      </Button>
    </Wrapper>
  );
};

export default ChatHeader;
