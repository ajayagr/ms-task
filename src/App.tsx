import Product from "./components/Product/Product";

import products from "./assets/products.json";
import "./App.scss";
import { useRef } from "react";

function App() {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleCarouselAction = (action: 1 | -1) => {
    if (action === 1) {
      if (gridRef?.current) {
        gridRef.current.scrollLeft += 200;
      }
    } else {
      if (gridRef?.current) {
        gridRef.current.scrollLeft =
          gridRef.current.scrollLeft - 200 < 0
            ? 0
            : gridRef.current.scrollLeft - 200;
      }
    }
  };

  return (
    <main className="carousel-container">
      <div className="action">
        <button
          aria-description="Previous products"
          onClick={() => handleCarouselAction(-1)}
        >
          &lt;
        </button>
      </div>
      <div ref={gridRef} className="product-grid">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className="action">
        <button
          aria-description="Next products"
          onClick={() => handleCarouselAction(1)}
        >
          &gt;
        </button>
      </div>
    </main>
  );
}

export default App;
