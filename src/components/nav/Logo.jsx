import React from "react";
import { FlexBox, ImgContainer } from "../util";
import { gameBoardLogo } from "../../assets";

const Logo = () => {
  return (
    <FlexBox>
      <ImgContainer imgSrc={gameBoardLogo} imgWidth="w-[25px]" />
      <p>Game board</p>
    </FlexBox>
  );
};

export default Logo;
