import { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { TProduct } from "./types/Products";
import { isSmallScreen } from "./utils/domUtils";
import { ViewportContext } from "./context";

function App() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [error, setError] = useState(false);
  const [smallScreen, setSmallScreen] = useState(isSmallScreen());

  useEffect(() => {
    (async () => {
      try {
        const productData = await (await fetch("/assets/products.json")).json();
        setProducts(productData);
        setError(false);
      } catch (err) {
        setError(true);
        console.log(err);
      }
    })();
    const handleWindowResize = () => {
      setSmallScreen(isSmallScreen());
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ isSmallScreen: smallScreen }}>
      <main>
        {products.length ? <ProductGrid products={products} /> : <></>}
        {error ? (
          <h1>
            Some error occured while fetching products. Please try again!!
          </h1>
        ) : (
          <></>
        )}
      </main>
    </ViewportContext.Provider>
  );
}

export default App;
