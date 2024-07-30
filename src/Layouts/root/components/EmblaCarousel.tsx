'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

// import { DotButton } from './EmblaCarouselDotButton';
import { useDotButton } from '../hooks/useDotButton';
import { carouselItemType } from '../utils/types';

type PropType = {
  slides: carouselItemType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Fade(),
    Autoplay({
      delay: 5000,
    }),
  ]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useDotButton(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((data, index) => (
            <div className="relative embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={data.imageUrl}
                alt="Your alt text"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black bg-opacity-50">
                <div className="w-[500px] flex flex-col gap-5 justify-center items-center">
                  <div className="text-xl text-custom-primary">Welcome</div>
                  <div className="text-xl text-center text-custom-white">
                    {data.heading}
                  </div>
                  <div className="text-center text-md text-custom-white">
                    {data.subHeading}
                  </div>
                  <div className="flex items-center gap-5">
                    <button className="px-4 py-3 duration-300 border text-custom-black bg-custom-primary border-custom-primary hover:bg-transparent hover:text-custom-primary">
                      Order Now
                    </button>
                    <button className="px-4 py-3 text-white duration-300 border border-white hover:border-custom-primary hover: hover:text-custom-dark hover:bg-custom-primary">
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default EmblaCarousel;
