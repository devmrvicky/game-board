import { FlexBox, ImgContainer } from "./util";
import { gameBoardLogo } from "../assets";

const LoadingPage = () => {
  return (
    <FlexBox
      className="h-screen border"
      direction="flex-col"
      justifyItems="justify-between"
    >
      <FlexBox direction="flex-col flex-1">
        <ImgContainer
          imgSrc={gameBoardLogo}
          imgAlt={"game-board-logo"}
          className="spinning-item"
        />
        <p>Game board initializing ...</p>
      </FlexBox>
      <p className="py-2">Made with ❤️ in Bharat by VickyK.</p>
    </FlexBox>
  );
};

export default LoadingPage;
