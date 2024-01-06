import { Container, FlexBox, SvgIcon } from "../util";
import { Logo } from ".";
import { avatarIcon } from "../../assets";

const Nav = () => {
  return (
    <nav className={"border p-2"}>
      <Container>
        <FlexBox justifyItems="justify-between">
          <Logo />
          {/* user avatar */}
          <SvgIcon
            children={avatarIcon}
            className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-slate-200/50 cursor-pointer"
          />
        </FlexBox>
      </Container>
    </nav>
  );
};

export default Nav;
