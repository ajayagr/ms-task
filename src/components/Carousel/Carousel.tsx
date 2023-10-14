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
  swipeable?: boolean;
  slideOffset?: number;
}

export type CarouselRef = {
  triggerGridUpdate: () => void;
};

const Carousel = forwardRef<CarouselRef, ICarouselProps>((props, ref) => {
  const { carouselContentRef, slideOffset, swipeable, children } = props;
  const {
    previousActionDisabled,
    nextActionDisabled,
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
  }));

  return (
    <div className="carousel-container">
      <div className="action">
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
      <div className="action">
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
