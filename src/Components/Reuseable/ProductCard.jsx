/* eslint-disable react/prop-types */

import wish from '../../assets/basic-icons/wishlist.png'
import cart from '../../assets/basic-icons/cart.png'
import useGetUserInfo from '../../Hooks/CommonHooks/useGetUserInfo';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const[userInfo, refetch, isLoading] = useGetUserInfo()
  console.log(userInfo)

  const handleAddToCart = (item) => {
    if(userInfo?.role){
      if(userInfo?.role === 'customer'){

      }else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Admin and Seller Cannot Add To Cart",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    }else{
      Swal.fire({
        title: "Login Required",
        text: "You need to login first!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { replace: true });
        }
      });
    }
    console.log(item)
  }
  const handleAddToWishList = (item) => {
    if(userInfo?.role){
      if(userInfo?.role === 'customer'){

      }else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Admin and Seller Cannot Add To Cart",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    }else{
      Swal.fire({
        title: "Login Required",
        text: "You need to login first!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { replace: true });
        }
      });
    }
    console.log(item)
  }


    return (
        <div className="flex flex-col justify-start items-start gap-3 rounded-lg shadow-md shadow-secondary px-5 py-5 bg-slate-100 relative">
            <div className="w-full flex justify-center">
            <img className="h-[300px]" src={product?.picture} alt={product?.name} />
            </div>
            <h3 className="font-semibold text-xl">{product?.name}</h3>
            <p className="font-thin">{product?.description}</p>
            <p className="font-semibold">Brand: {product?.brand}</p>
            <p className="text-primary absolute px-3 py-2 bg-white rounded-lg font-semibold bottom-[50%] right-[22%] shadow-lg">
               ${product?.price?.present_price}
              {product?.price?.onOffer && (
                <span className="line-through px-2 text-error"> ${product?.price?.previous_price}</span>
              )}
            </p>
            <p>Category: <span className="font-semibold">{product?.category}</span></p>
            <div className='flex justify-between items-center w-full gap-5 px-[5%] bg-white py-[3%] shadow-lg rounded-xl'>
              <button onClick={()=>handleAddToWishList(product)}><img className='h-[50px]   ' src={wish} alt="Wish List" /></button>
              <button onClick={()=>handleAddToCart(product)}><img className='h-[50px]  ' src={cart} alt="Add to Cart" /></button>
            </div>
          </div>
    );
};

export default ProductCard;