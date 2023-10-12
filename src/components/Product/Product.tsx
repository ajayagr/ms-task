import { PreviewType } from "../../constants/product";
import { TProduct } from "../../types/Products";
import "./Product.scss";

export interface IProductProps {
  product: TProduct;
}

const Product = ({ product }: IProductProps) => {
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
    <div className={`product ${itemClass}`}>
      <a href={product.src} aria-labelledby={linkDescriptionId}>
        <div className="img-container">
          <img src={`/assets/images/${imgName}.jpg`} alt={product.name} />
        </div>
        <p>{product.portal}</p>
        <p>
          {product.currencySymbol}
          {product.MRP - product.discount}
        </p>
      </a>
      <p hidden id={linkDescriptionId}>
        Link to {product.name}
      </p>
    </div>
  );
};

export default Product;
