import CustomLink from "../atoms/customLink";
import { headerRouter } from "../../utils/constants/header-router";
const HoziroltalNav = () => {
  return (
    <div className="hidden 2md:flex basis-2/3 gap-10 justify-center text-center items-center uppercase text-sm text-[#f0f0f0] font-semibold">
      {headerRouter.map((item, index) => {
        return (
          <CustomLink
            key={index}
            itemName={item.title}
            href={item.href}
          ></CustomLink>
        );
      })}
    </div>
  );
};
export default HoziroltalNav;
