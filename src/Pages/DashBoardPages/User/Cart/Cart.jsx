import React from "react";
import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import useGetCart from "../../../../Hooks/User/useGetCart";
import CardsofCart from "./CardsofCart";
import Loading from "../../../../Components/Reuseable/Loading";

const Cart = () => {
  const [cart,loadCart, reloadCart] = useGetCart()
  return (
    <div className="pb-[10%]">
      <SectionTitle title={"Cart"}></SectionTitle>
      {
        loadCart ? <Loading></Loading> : <div>
          {cart?.length === 0 ? <h1 className="text-2xl font-bold text-center flex justify-center">No items in cart</h1> : ''}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-5">
          
          {
            cart?.map(item=> <CardsofCart key={item._id} item={item} reloadCart={reloadCart}></CardsofCart>)
          }
        </div>
        </div>
      }
    </div>
  );
};

export default Cart;
