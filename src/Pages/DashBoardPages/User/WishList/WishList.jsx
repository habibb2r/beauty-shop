import React from "react";
import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import useGetWishList from "../../../../Hooks/User/useGetWishList";
import CardOfWishList from "./CardsOfWishList";

const WishList = () => {
  const[wishLists ,loadWishList, reloadWishList] =useGetWishList()
  return (
    <div>
      <SectionTitle title={"WishList"}></SectionTitle>
      {
        loadWishList ? <div className="loading loading-spinner loading-lg mx-auto"></div> : <div>
          {wishLists?.length === 0 ? <h1 className="text-2xl font-bold text-center flex justify-center">Empty Wish List</h1> : ''}<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-5">
          {
            wishLists?.map(item=> <CardOfWishList key={item._id} item={item} reloadWishList={reloadWishList}></CardOfWishList>)
          }
        </div>
        </div>
      }
    </div>
  );
};

export default WishList;
