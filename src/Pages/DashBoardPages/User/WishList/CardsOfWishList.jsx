import Swal from 'sweetalert2';
import cartimg from '../../../../assets/basic-icons/cart.png'
import remove from '../../../../assets/basic-icons/delete.png'
import useAxiosSecure from '../../../../Hooks/CommonHooks/useAxiosSecure';
import useGetUserInfo from '../../../../Hooks/CommonHooks/useGetUserInfo';
import useGetCart from '../../../../Hooks/User/useGetCart';
import { Link } from 'react-router-dom';

const CardOfWishList = (data) => {
    const axiosSecure = useAxiosSecure()
    const[userInfo, , ] = useGetUserInfo()
    const [,, reloadCart] = useGetCart()
     const handleAddToCart = (item) => {
          
              const cartData = {
                email: userInfo?.email,
                itemId : item.itemId,
                itemName: item.itemName,
                itemPrice: item.itemPrice,
                itemImage: item.itemImage
              }
              console.log(cartData)
              axiosSecure.post('/addToCart', cartData)
              .then(res=>{
                if(res.data.insertedId){
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Added To Cart",
                    showConfirmButton: false,
                    timer: 2500,
                  });
                  reloadCart()
                  data.reloadWishList()
                }
              })
       
       
      }

      console.log(data)
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-1 shadow-lg shadow-accent px-3 py-2 rounded-2xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 bg-slate-100 px-5 py-3 rounded-md">
            <img className="h-[110px] rounded-lg shadow-lg" src={data?.item?.itemImage} alt="" />
            <div>
            <h1 className="font-bold text-xl">{data?.item?.itemName}</h1>
            <p className="font-bold">Price : {data?.item?.itemPrice}tk</p>
            </div>
        </div>
        <div className="flex md:flex-col justify-between items-center gap-10 md:gap-6 ">
            <Link to={`/productdetails/${data?.item?.itemId}`}><img className='h-[40px]' src={cartimg} alt="" /></Link>
            <button ><img className='h-[40px]' src={remove} alt="" /></button>
        </div>
        </div>
    );
};

export default CardOfWishList;