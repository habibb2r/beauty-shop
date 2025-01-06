import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/CommonHooks/useProductDetails";

const ProductDetails = () => {
  const itemId = useParams();
  console.log(itemId.id);
  const [details, itemRefetch, isLoading] = useProductDetails(itemId.id);
  console.log(details);
  return (
    <div className="pt-[3%]">
      <h1 className="text-3xl text-center font-semibold">Product Details</h1>
      <div className="flex justify-center items-start gap-10 pt-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl font-bold w-[80%]">{details?.name}</h1>
          <img className="h-[300px] rounded-lg shadow-lg" src={details?.picture} alt="" />
        </div>
        <div>
          <div className="flex justify-start items-start gap-2">
            <h1 className="font-bold">Description</h1>
            <p>{details?.description}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
