import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/CommonHooks/useProductDetails";
import { Rating } from "@smastrom/react-rating";
import { IoPeople } from "react-icons/io5";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { useState } from "react";
import Swal from "sweetalert2";
import facebook from '../../assets/basic-icons/facebook.png'
import whatsapp from '../../assets/basic-icons/whatsapp.png'
import copylink from '../../assets/basic-icons/copy-link.png'
const ProductDetails = () => {
  const itemId = useParams();
  console.log(itemId.id);
  const [quantity, setQuantity] = useState(1);
  const [details, itemRefetch, isLoading] = useProductDetails(itemId.id);
  const productUrl = window.location.href;
  console.log(details);
  const handleAddToCart = (item)=>{
    if(item.stock < quantity){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Out of Stock",
        text: `Please select quantity less than ${item.stock}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
    window.open(facebookUrl, '_blank');
};

const copyProductUrl = () => {
  navigator.clipboard.writeText(productUrl).then(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Copied successfully"
    });
  }, () => {
      alert('Failed to copy the product URL.');
  });
};

const shareOnWhatsApp = () => {
    const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(details.name)}%20${encodeURIComponent(productUrl)}`;
    window.open(whatsAppUrl, '_blank');
};

  return (
    <div className="pt-[3%] px-[3%]">
      <h1 className="text-3xl text-center font-semibold">Product Details</h1>
      <div className="flex justify-center items-start gap-5 pt-10">
        <div className="flex flex-col justify-center items-center gap-5 w-1/2">
          <img
            className="h-[300px] rounded-lg shadow-lg"
            src={details?.picture}
            alt=""
          />
          <div>

          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-start items-start gap-4">
          <h1 className="text-3xl font-bold">{details?.name}</h1>
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

            <div>
              <p className="font-semibold text-xl">In Stock: <span className="font-bold">{details?.stock}</span></p>
            </div>

            <div className="flex items-center gap-5">
            <BsFillBookmarkHeartFill className="text-3xl text-red-600" />
            <div className="flex items-center gap-2 px-3 py-2 rounded-md shadow-md border-2">
            <CiSquareMinus onClick={()=>setQuantity(quantity-1)} className="text-3xl font-semibold" />
            <div className="border-x-2 px-4">
            <p className="text-xl select-none">{quantity}</p>
            </div>
            <CiSquarePlus onClick={()=>setQuantity(quantity+1)} className="text-3xl font-semibold" />
          
            </div>
            <div>
              <button onClick={()=>handleAddToCart(details)} className="select-none px-3 py-2 rounded-xl shadow-lg bg-green-400 font-bold">Add To Cart</button>
            </div>
            </div>
            <div className="flex items-center gap-5 py-[2%]">
              <p>Share on : </p>
            <div className="flex justify-start items-center gap-3">
                      <button onClick={shareOnFacebook}><img className="h-[50px]" src={facebook} alt="" /></button>
                      <button onClick={shareOnWhatsApp}><img className="h-[50px]" src={whatsapp} alt="" /></button>
                      <button onClick={copyProductUrl}><img className="h-[30px]" src={copylink} alt="" /></button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 pt-10">
        <div className="bg-yellow-50 px-[2%] py-[3%]">
          <h1 className="text-2xl font-semibold border-b-2 w-[60%] pb-2">Description</h1>
          <p className="text-justify px-[2%]">{details?.description}</p>
        </div>
        <div>
        <h1 className="text-2xl font-semibold border-b-2 w-[60%] pb-2">Reviews</h1>
          <div>
            {
              details?.reviews?.length > 0  ? ' ' : <h1>No Reviews Yet</h1>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
