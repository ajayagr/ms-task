import {
  PropsWithChildren,
  RefObject,
  forwardRef,
  useImperativeHandle,
} from "react";
import useCarousel from "../../hooks/useCarousel";

import "./Carousel.scss";

interface ICarouselProps extends PropsWithChildren {
  carouselContentRef: RefObject<HTMLElement>;
}

export type CarouselRef = {
  triggerGridUpdate: () => void;
};

const Carousel = forwardRef<CarouselRef, ICarouselProps>((props, ref) => {
  const { carouselContentRef, children } = props;
  const {
    previousActionDisabled,
    nextActionDisabled,
    handleCarouselAction,
    updateGridAction,
  } = useCarousel(carouselContentRef);

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
          onClick={() => handleCarouselAction(-1)}
        >
          &lt;
        </button>
      </div>
      {children}
      <div className="action">
        <button
          disabled={nextActionDisabled}
          aria-description="Next products"
          onClick={() => handleCarouselAction(1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
});

export default Carousel;
