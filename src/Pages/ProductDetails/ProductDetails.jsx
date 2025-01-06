import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/CommonHooks/useProductDetails";
import { Rating } from "@smastrom/react-rating";
import { IoPeople } from "react-icons/io5";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { useState } from "react";

const ProductDetails = () => {
  const itemId = useParams();
  console.log(itemId.id);
  const [quantity, setQuantity] = useState(0);
  const [details, itemRefetch, isLoading] = useProductDetails(itemId.id);
  console.log(details);

  return (
    <div className="pt-[3%]">
      <h1 className="text-3xl text-center font-semibold">Product Details</h1>
      <div className="flex justify-center items-start gap-10 pt-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl font-bold w-[80%]">{details?.name}</h1>
          <img
            className="h-[300px] rounded-lg shadow-lg"
            src={details?.picture}
            alt=""
          />
        </div>
        <div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-center gap-2">
              <h1 className="text-2xl font-bold">Price:</h1>
              <h1 className="text-2xl font-bold line-through text-error">
                ${details?.price.previous_price}
              </h1>
              <h1 className="text-2xl font-bold">
                ${details?.price.present_price}
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <Rating
                style={{ maxWidth: 150 }}
                value={details?.rating}
                readOnly
              />
              <div className="flex items-center gap-2">
                <IoPeople className="text-2xl" />
                <p>
                  <span className="font-bold">{details?.total_rated}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
            <BsFillBookmarkHeartFill className="text-3xl text-red-600" />
            <div className="flex items-center gap-2 px-3 py-2 rounded-md shadow-md border-2">
            <CiSquarePlus className="text-3xl font-semibold" />
            <div className="border-x-2 px-2">
            <p className="text-xl">{quantity}</p>
            </div>
            <CiSquareMinus className="text-3xl font-semibold" />
            </div>
            </div>
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
