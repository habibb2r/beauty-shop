import React from "react";
import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import useGetCart from "../../../../Hooks/User/useGetCart";
import CardsofCart from "./CardsofCart";

const Cart = () => {
  const [cart,loadCart, reloadCart] = useGetCart()
  return (
    <div>
      <SectionTitle title={"Cart"}></SectionTitle>
      {
        loadCart ? <div className="loading loading-spinner loading-lg mx-auto"></div> : <div>
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
