import { RefObject, useState } from "react";

const DEFAULT_SLIDE_OFFSET = 100;
export enum CarouselAction {
  Left,
  Right,
}

function useCarousel(ref: RefObject<HTMLElement>, slideOffset?: number) {
  const offset = slideOffset ?? DEFAULT_SLIDE_OFFSET;
  const [previousActionDisabled, setPreviousActionDisabled] = useState(true);
  const [nextActionDisabled, setNextActionDisbabled] = useState(false);
  const handleCarouselAction = (action: CarouselAction) => {
    if (action === CarouselAction.Right) {
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
    updateGridAction,
  };
}

export default useCarousel;
