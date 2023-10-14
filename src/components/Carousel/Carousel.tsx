import {
  PropsWithChildren,
  RefObject,
  forwardRef,
  useImperativeHandle,
} from "react";
import useCarousel, { CarouselAction } from "../../hooks/useCarousel";

import "./Carousel.scss";

interface ICarouselProps extends PropsWithChildren {
  carouselContentRef: RefObject<HTMLElement>;
  slideOffset?: number;
}

export type CarouselRef = {
  triggerGridUpdate: () => void;
};

const Carousel = forwardRef<CarouselRef, ICarouselProps>((props, ref) => {
  const { carouselContentRef, slideOffset, children } = props;
  const {
    previousActionDisabled,
    nextActionDisabled,
    handleCarouselAction,
    updateGridAction,
  } = useCarousel(carouselContentRef, slideOffset);

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
          onClick={() => handleCarouselAction(CarouselAction.Left)}
        >
          &lt;
        </button>
      </div>
      {children}
      <div className="action">
        <button
          disabled={nextActionDisabled}
          aria-description="Next products"
          onClick={() => handleCarouselAction(CarouselAction.Right)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
});

export default Carousel;
