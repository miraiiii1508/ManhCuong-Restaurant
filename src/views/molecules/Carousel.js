import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import imgtesst from "../../assets/image/bg_1.jpg.webp";
import bg1 from "../../assets/image/bg_2.jpg.webp";

import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { CustomButton } from "../../views/atoms/customButton";
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative w-full h-[100vh]" // Adjusted height to viewport height
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {[imgtesst, bg1, bg1].map((image, index) => (
          <CarouselItem key={index} className="relative">
            <div className="relative w-full h-full">
              <Card className="relative overflow-hidden">
                <CardContent className="relative flex w-full h-[100vh] items-center justify-center p-0 border-none">
                  <div
                    className="w-full h-full bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <div className="absolute flex flex-col gap-20 2md:gap-20 w-[80%] justify-center items-center bg-transparent z-50">
                    <div className="text-white text-4xl 2md:text-7xl font-Great tracking-wider text-center font-medium 2md:leading-[70px]">
                      Hãy đặt cho mình một bàn để tận hưởng với nhà hàng chúng
                      tôi!
                    </div>
                    <CustomButton className="border-white bg-transparent text-[16px] 2md:text-xl xl:text-3xl text-white font-Great hover:bg-white hover:text-black">
                      Đặt bàn
                    </CustomButton>
                  </div>
                  <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
