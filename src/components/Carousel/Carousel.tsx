import {
  PropsWithChildren,
  RefObject,
  forwardRef,
  useImperativeHandle,
} from "react";
import useCarousel, { CarouselAction } from "../../hooks/useCarousel";

import "./Carousel.scss";
import { useSwipeable } from "react-swipeable";

interface ICarouselProps extends PropsWithChildren {
  carouselContentRef: RefObject<HTMLElement>;
  hideActions?: boolean;
  swipeable?: boolean;
  slideOffset?: number;
}

export type CarouselRef = {
  triggerGridUpdate: () => void;
  resetScroll: () => void;
};

const Carousel = forwardRef<CarouselRef, ICarouselProps>((props, ref) => {
  const { carouselContentRef, hideActions, slideOffset, swipeable, children } =
    props;
  const {
    previousActionDisabled,
    nextActionDisabled,
    scrollToStart,
    handleCarouselAction,
    slideCarousel,
    updateGridAction,
  } = useCarousel(carouselContentRef, slideOffset);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: (e) => {
      swipeable && slideCarousel({ xPos: -e.deltaX });
    },
    onSwipedRight: (e) => {
      swipeable && slideCarousel({ xPos: -e.deltaX });
    },
  });

  useImperativeHandle(ref, () => ({
    triggerGridUpdate() {
      updateGridAction();
    },
    resetScroll() {
      scrollToStart();
    },
  }));

  return (
    <div className="carousel-container">
      <div className={`action ${hideActions ? "hidden" : ""}`}>
        <button
          disabled={previousActionDisabled}
          aria-description="Previous products"
          onClick={() => handleCarouselAction(CarouselAction.Previous)}
        >
          &lt;
        </button>
      </div>
      <div {...swipeHandlers} className="content">
        {children}
      </div>
      <div className={`action ${hideActions ? "hidden" : ""}`}>
        <button
          disabled={nextActionDisabled}
          aria-description="Next products"
          onClick={() => handleCarouselAction(CarouselAction.Next)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
});

export default Carousel;
