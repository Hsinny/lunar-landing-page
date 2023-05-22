import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect, useState, useCallback } from "react";
import CarouselDots from "./CarouselDots";

const Carousel = ({ children, ...options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const length = React.Children.count(children);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const handleClick = (index) => (event) => {
    event.preventDefault();
    scrollTo(index);
  };

  function selectHandler() {
    const index = emblaApi?.selectedScrollSnap();
    setSelectedIndex(index || 0);
  }

  useEffect(() => {
    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <CarouselDots
        itemsLength={length}
        selectedIndex={selectedIndex}
        onClick={handleClick}
      />
    </>
  );
};
export default Carousel;
