import { TProduct } from "../../../types/Products";
import "./ProductDetail.scss";

export interface IProductDetailProps {
  product: TProduct;
  handleSearchFor: (target: string) => void;
}

function ProductDetail({ product, handleSearchFor }: IProductDetailProps) {
  const labelDescriptionId = `product-${product.id}`;
  return (
    <div className="product-detail">
      <a
        className="card"
        href={product.src}
        aria-labelledby={labelDescriptionId}
        tabIndex={-1}
      >
        <div className="img-container">
          <img src={product.image.regular} alt={product.name} loading="lazy" />
        </div>
        <div className="product-info">
          <p>{product.name}</p>

          <p className="text-bold">
            {product.currencySymbol}
            {product.MRP - product.discount}{" "}
            {product.discount > 0 ? (
              <span className="text-strikethrough text-grey">
                ({product.currencySymbol}
                {product.MRP})
              </span>
            ) : (
              <></>
            )}
          </p>
          <p className="text-success">
            {product.brand} at {product.portal}
          </p>
        </div>
      </a>
      <div className="more">
        <button
          className="d-flex no-style text-white w-100 justify-space-between align-center"
          onClick={() => handleSearchFor(product.primaryFor)}
          tabIndex={-1}
        >
          <p>See more {product.primaryFor} gifts</p>
          <span className="text-lg">&gt;</span>
        </button>
      </div>
      <p hidden id={labelDescriptionId}>
        Link to {product.name}
      </p>
    </div>
  );
}

export default ProductDetail;
