import { RefObject, useState } from "react";

export type TCarouselSwipeData = {
  xPos?: number;
  yPos?: number;
};

const DEFAULT_SLIDE_OFFSET = 100;
export enum CarouselAction {
  Previous,
  Next,
}

function useCarousel(ref: RefObject<HTMLElement>, slideOffset?: number) {
  const offset = slideOffset ?? DEFAULT_SLIDE_OFFSET;
  const [previousActionDisabled, setPreviousActionDisabled] = useState(true);
  const [nextActionDisabled, setNextActionDisbabled] = useState(false);

  const handleCarouselAction = (action: CarouselAction) => {
    if (action === CarouselAction.Next) {
      if (ref.current) {
        ref.current.scrollLeft += ref.current.clientWidth - offset;
      }
    } else {
      if (ref.current) {
        ref.current.scrollLeft =
          ref.current.scrollLeft - (ref.current.clientWidth - offset) < 0
            ? 0
            : ref.current.scrollLeft - (ref.current.clientWidth - offset);
      }
    }
    setTimeout(() => updateGridAction(), 1000);
  };

  const slideCarousel = ({ xPos, yPos }: TCarouselSwipeData) => {
    if (xPos) {
      if (ref.current) {
        ref.current.scrollLeft += xPos;
      }
    } else if (yPos) {
      if (ref.current) {
        ref.current.scrollTop += yPos;
      }
    }
  };

  const updateGridAction = () => {
    if (ref.current) {
      const previousActionDisabled = ref.current.scrollLeft === 0;
      const nextActionDisabled =
        ref.current.scrollLeft + ref.current.clientWidth >=
        ref.current.scrollWidth;
      setPreviousActionDisabled(previousActionDisabled);
      setNextActionDisbabled(nextActionDisabled);
    }
  };

  return {
    previousActionDisabled,
    nextActionDisabled,
    handleCarouselAction,
    slideCarousel,
    updateGridAction,
  };
}

export default useCarousel;
