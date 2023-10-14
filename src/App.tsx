import { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { TProduct } from "./types/Products";

function App() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [error, setError] = useState(false);
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
  }, []);
  return (
    <main>
      {products.length ? <ProductGrid products={products} /> : <></>}
      {error ? (
        <h1>Some error occured while fetching products. Please try again!!</h1>
      ) : (
        <></>
      )}
    </main>
  );
}

export default App;
