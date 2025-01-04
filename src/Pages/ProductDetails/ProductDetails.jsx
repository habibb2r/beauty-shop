import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/CommonHooks/useProductDetails";

const ProductDetails = () => {
    const itemId = useParams();
    console.log(itemId.id)
    const [details, itemRefetch, isLoading] = useProductDetails(itemId.id);
    console.log(details);
  return (
    <div className="product-details">
      <img src={details.picture} alt={details.name} className="product-image" />
      <h1 className="product-name">{details.name}</h1>
      <p className="product-description">{details.description}</p>
      <p className="product-price">${details?.price?.present_price}</p>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;