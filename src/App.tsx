import { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { TProduct } from "./types/Products";
import { isMobileScreen, isSmallScreen } from "./utils/domUtils";
import { ViewportContext } from "./context";

function App() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [error, setError] = useState(false);
  const [smallScreen, setSmallScreen] = useState(isSmallScreen());
  const [mobileScreen, setMobileScreen] = useState(isMobileScreen());

  const fetchAndSetProducts = async (
    productCategory: "normal" | "extended"
  ) => {
    let productsToFetch = "products";
    if (productCategory === "extended") {
      productsToFetch = "products-extended";
    }
    try {
      const productData = await (
        await fetch(`/assets/${productsToFetch}.json`)
      ).json();
      setProducts(productData);
      setError(false);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAndSetProducts("normal");
    const handleWindowResize = () => {
      setSmallScreen(isSmallScreen());
      setMobileScreen(isMobileScreen());
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleGetMoreProducts = () => {
    fetchAndSetProducts("extended");
  };

  return (
    <ViewportContext.Provider
      value={{ isSmallScreen: smallScreen, isMobileScreen: mobileScreen }}
    >
      <main>
        {products.length ? (
          <ProductGrid
            products={products}
            getMoreProduct={handleGetMoreProducts}
          />
        ) : (
          <></>
        )}
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
