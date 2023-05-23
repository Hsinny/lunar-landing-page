import useEmblaCarousel from "embla-carousel-react";
import React, {
  useEffect,
  useState,
  useCallback,
  ReactNode,
  MouseEvent,
} from "react";
import CarouselDots from "./CarouselDots";

export default function Carousel({
  children,
  ...options
}: {
  children: ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const length = React.Children.count(children);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const handleClick = (index: number) => (event: MouseEvent) => {
    event.preventDefault();
    scrollTo(index);
  };

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

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
}
