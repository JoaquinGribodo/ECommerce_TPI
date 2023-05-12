import "./ProductCard.css";

const ProductCard = ({ children }) => {
  return (
    <div className="card bg-light mb-3 style=max-width: 18rem">{children}</div>)
};

export default ProductCard;
