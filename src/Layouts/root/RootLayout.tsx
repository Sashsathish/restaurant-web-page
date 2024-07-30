import EmblaCarousel from './components/EmblaCarousel';
import { carouselData } from './utils';
import Header from './components/Header';

const RootLayout = () => {
  const options = { loop: true };
  return (
    <div className="w-full h-dvh ">
      <Header />
      <EmblaCarousel slides={carouselData} options={options} />
    </div>
  );
};

export default RootLayout;
