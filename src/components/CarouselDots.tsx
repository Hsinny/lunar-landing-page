import classNames from "classnames";
import { MouseEvent } from "react";

export default function CarouselDots({
  itemsLength,
  selectedIndex,
  onClick,
}: {
  itemsLength: number;
  selectedIndex: number;
  onClick: (index: number) => (e: MouseEvent) => void;
}) {
  const arr = new Array(itemsLength).fill(0);
  return (
    <ul className="flex justify-center">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <li
            className={classNames({
              "mr-2 inline-block rounded-full p-1 hover:bg-pink": true,
              "bg-pink": selected,
              "bg-greyD5": !selected,
            })}
            key={index}
            onClick={onClick(index)}
          ></li>
        );
      })}
    </ul>
  );
}
