
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;