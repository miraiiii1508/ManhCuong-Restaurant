import "./App.css";
import { CarouselPlugin } from "./views/molecules/Carousel";
import FormSlider from "./views/molecules/formSlider";
import Header from "./views/organisms/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="relative">
        <CarouselPlugin />
        <div className="absolute  2md:bottom-0 -bottom-1/3 w-full flex justify-center items-center">
          <FormSlider />
        </div>
      </div>
    </div>
  );
}

export default App;
