import CustomLink from "../atoms/customLink";
import { LogoSquare } from "../atoms/LogoSquare";
import HoziroltalNav from "../molecules/HoziroltalNav";
import VerticalNav from "../molecules/verticalNav";

const Header = () => {
  return (
    <div className="relative App content-wrapper ct-static max-w-screen-2xl text-base mx-auto z-50">
      <div className="absolute inset-0 mx-auto w-full">
        <div className="flex justify-between items-center text-center  bg-transparent z-50">
          <LogoSquare />
          <HoziroltalNav />
          <VerticalNav />
        </div>
      </div>
    </div>
  );
};
export default Header;
