import { RefObject, useState } from "react";

function useCarousel(ref: RefObject<HTMLElement>) {
  const [previousActionDisabled, setPreviousActionDisabled] = useState(true);
  const [nextActionDisabled, setNextActionDisbabled] = useState(false);
  const handleCarouselAction = (action: 1 | -1) => {
    if (action === 1) {
      if (ref.current) {
        ref.current.scrollLeft += ref.current.clientWidth - 50;
      }
    } else {
      if (ref.current) {
        ref.current.scrollLeft =
          ref.current.scrollLeft - (ref.current.clientWidth - 50) < 0
            ? 0
            : ref.current.scrollLeft - (ref.current.clientWidth - 50);
      }
    }
    setTimeout(() => updateGridAction(), 500);
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
