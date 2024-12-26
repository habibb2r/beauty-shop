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
        loadCart ? <div className="loading loading-spinner loading-lg mx-auto"></div> : <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-5">
          {
            cart?.map(item=> <CardsofCart key={item._id} item={item} reloadCart={reloadCart}></CardsofCart>)
          }
        </div>
      }
    </div>
  );
};

export default Cart;
