import { Tooltip } from "react-tooltip";
import { PreviewType } from "../../constants/product";
import { TProduct } from "../../types/Products";
import "./Product.scss";
import ProductDetail from "./ProductDetail/ProductDetail";
import { isElementCompletelyVisible } from "../../utils/domUtils";

export interface IProductProps {
  product: TProduct;
  showDetail: boolean;
  singleRow?: boolean;
  handleSearchFor: (target: string) => void;
}

function Product({
  product,
  showDetail,
  singleRow,
  handleSearchFor,
}: IProductProps) {
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
  const discountPercentage = Math.round((product.discount / product.MRP) * 100);

  const handleProductFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    const productTile = e.target.parentElement;
    const isProductVisible =
      (productTile && isElementCompletelyVisible(productTile)) ?? false;
    if (!isProductVisible) {
      productTile?.scrollIntoView();
    }
  };

  return (
    <div
      className={`product tile ${itemClass} ${
        singleRow ? "item-single-row" : ""
      }`}
    >
      <a
        href={product.src}
        aria-labelledby={linkDescriptionId}
        id={`${linkDescriptionId}-link`}
        onFocus={handleProductFocus}
      >
        <div className="d-flex img-container">
          <img
            src={`/assets/images/${imgName}.jpg`}
            alt={product.name}
            loading="lazy"
          />
        </div>
        <div className="product-info">
          <p>{product.name}</p>
          <p className="text-bold">
            {product.currencySymbol}
            {product.MRP - product.discount}
            <span className="text-success">
              {discountPercentage > 0 ? ` (-${discountPercentage}%)` : ""}
            </span>
          </p>
          {singleRow ? (
            <p className="text-success">
              {product.brand} at {product.portal}
            </p>
          ) : (
            <></>
          )}
        </div>
      </a>
      <p hidden id={linkDescriptionId}>
        Link to {product.name}
      </p>
      {showDetail ? (
        <Tooltip
          className="product-detail"
          anchorSelect={`#${linkDescriptionId}-link`}
          place={
            product.previewType === PreviewType.tall ? "left" : "top-start"
          }
          clickable
        >
          <ProductDetail
            product={product}
            imgName={imgName}
            handleSearchFor={handleSearchFor}
          />
        </Tooltip>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Product;
