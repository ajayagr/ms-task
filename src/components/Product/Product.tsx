import { Tooltip } from "react-tooltip";
import { PreviewType } from "../../constants/product";
import { TProduct } from "../../types/Products";
import "./Product.scss";
import ProductDetail from "./ProductDetail/ProductDetail";

export interface IProductProps {
  product: TProduct;
  handleSearchFor: (target: string) => void;
}

function Product({ product, handleSearchFor }: IProductProps) {
  let itemClass = "item";
  let imgName = "img-normal";
  if (product.previewType === PreviewType.tall) {
    itemClass = "item-tall";
    imgName = "img-tall";
  } else if (product.previewType === PreviewType.wide) {
    itemClass = "item-wide";
    imgName = "img-wide";
  }
  const linkDescriptionId = `product-${product.id}`;
  return (
    <div className={`product tile ${itemClass}`}>
      <a
        href={product.src}
        aria-labelledby={linkDescriptionId}
        id={`${linkDescriptionId}-link`}
      >
        <div className="d-flex img-container">
          <img src={`/assets/images/${imgName}.jpg`} alt={product.name} />
        </div>
        <p>{product.portal}</p>
        <p className="text-bold">
          {product.currencySymbol}
          {product.MRP - product.discount}
        </p>
      </a>
      <p hidden id={linkDescriptionId}>
        Link to {product.name}
      </p>
      <Tooltip
        anchorSelect={`#${linkDescriptionId}-link`}
        className="product-detail"
        place="left"
        clickable
      >
        <ProductDetail
          product={product}
          imgName={imgName}
          handleSearchFor={handleSearchFor}
        />
      </Tooltip>
    </div>
  );
}

export default Product;
