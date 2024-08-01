import { headerRouter } from "../../utils/constants/header-router";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import HambergerButton from "../atoms/hambergerButton";
import { CloseButton } from "../atoms/closeButton";

const VerticalNav = () => {
  return (
    <Drawer className="2md:hidden">
      <DrawerTrigger className="flex justify-center items-center 2md:hidden text-white basis-1/6">
        <HambergerButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex justify-end">
          <DrawerClose>
            <CloseButton />
          </DrawerClose>
        </DrawerHeader>
        <div className="flex flex-col justify-center items-center gap-2 uppercase font-semibold">
          {headerRouter.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="w-full text-center py-4 px-4 hover:bg-gray-700 "
            >
              {item.title}
            </a>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default VerticalNav;
