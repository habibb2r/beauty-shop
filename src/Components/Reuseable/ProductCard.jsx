/* eslint-disable react/prop-types */

import wish from '../../assets/basic-icons/wishlist.png'
import cart from '../../assets/basic-icons/cart.png'
import useGetUserInfo from '../../Hooks/CommonHooks/useGetUserInfo';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/CommonHooks/useAxiosSecure';
import useGetCart from '../../Hooks/User/useGetCart';
import useGetWishList from '../../Hooks/User/useGetWishList';
import { Rating } from '@smastrom/react-rating';
import { IoPeople } from "react-icons/io5";
import { BsBookmarkHeart } from 'react-icons/bs';


const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const[userInfo, refetch, isLoading] = useGetUserInfo()
  const axiosSecure = useAxiosSecure()
  
  const [ ,, reloadWishList] = useGetWishList()


 
  const handleAddToWishList = (item) => {
    if(userInfo?.role){
      if(userInfo?.role === 'customer'){
        const wishlistData = {
          email: userInfo.email,
          itemId : item._id,
          itemName: item.name,
          itemPrice: item.price.present_price,
          itemImage: item.picture
        }
        axiosSecure.post('/addToWishList', wishlistData)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added To Wishlist!",
              showConfirmButton: false,
              timer: 2500,
            });
            reloadWishList()
          }
        })
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
        <div className="flex flex-col justify-start items-start gap-3 rounded-lg shadow-md shadow-secondary px-5 py-5 bg-slate-100 ">
            <div className="md:w-full flex justify-center relative">
            <img className="h-[300px] rounded-md " src={product?.picture} alt={product?.name} />
            <p className="text-primary absolute px-3 py-2 bg-white rounded-lg font-semibold bottom-[20%] right-[15%] shadow-lg">
               {product?.price?.present_price}tk
              {product?.price?.onOffer && (
                <span className="line-through px-2 text-error"> ${product?.price?.previous_price}tk</span>
              )}
            </p>
            </div>
            <Link to={`/productdetails/${product?._id}`} className="font-semibold text-xl overflow-ellipsis overflow-hidden md:whitespace-nowrap w-[90%]">{product?.name}</Link>
              <div className='flex items-center gap-3'>
              <Rating style={{ maxWidth: 100 }} value={product?.rating} readOnly />
              <div className='flex items-center'>
              <IoPeople className='text-xl' />
              <p>(<span className='font-bold'>{product?.total_rated}</span>)</p>
              </div>
              </div>
            <p className="overflow-ellipsis overflow-hidden md:whitespace-nowrap  w-[90%]">{product?.description}</p>
            <p className="">Brand: <span className='font-bold'>{product?.brand}</span></p>
            
            <p>Category: <span className="font-bold">{product?.category}</span></p>
            <div className='flex justify-between items-center w-full gap-5 px-[5%] py-[3%]'>
              <button className='px-[2%] py-[2%] bg-white rounded-3xl shadow-2xl shadow-primary' onClick={()=>handleAddToWishList(product)}><BsBookmarkHeart className='text-4xl text-red-600' /></button>
              <Link to={`/productdetails/${product?._id}`} className='px-[3%] py-[2%] bg-green-300 font-semibold rounded-2xl shadow-md shadow-primary'>Buy Now</Link>
            </div>
          </div>
    );
};

export default ProductCard;