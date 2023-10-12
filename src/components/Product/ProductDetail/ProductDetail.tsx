import { TProduct } from "../../../types/Products";
import "./ProductDetail.scss";

export interface IProductDetailProps {
  product: TProduct;
  imgName: string;
  handleSearchFor: (target: string) => void;
}

function ProductDetail({
  product,
  imgName,
  handleSearchFor,
}: IProductDetailProps) {
  const labelDescriptionId = `product-${product.id}`;
  return (
    <div className="product-detail">
      <a
        className="card"
        href={product.src}
        aria-labelledby={labelDescriptionId}
      >
        <div className="img-container">
          <img src={`/assets/images/${imgName}.jpg`} alt={product.name} />
        </div>
        <p>{product.name}</p>
        {product.discount > 0 ? (
          <p className="text-strikethrough text-primary-light">
            {product.currencySymbol}
            {product.MRP}
          </p>
        ) : (
          <></>
        )}
        <p className="text-bold">
          {product.currencySymbol}
          {product.MRP - product.discount}
        </p>
        <p className="text-success">{product.brand}</p>
      </a>
      <div className="more">
        <p>See more {product.primaryFor} gifts</p>
        <button
          className="no-style text-white text-lg"
          onClick={() => handleSearchFor(product.primaryFor)}
        >
          &gt;
        </button>
      </div>
      <p hidden id={labelDescriptionId}>
        Link to {product.name}
      </p>
    </div>
  );
}

export default ProductDetail;
