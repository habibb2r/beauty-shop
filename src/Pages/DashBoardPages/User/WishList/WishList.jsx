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
        loadWishList ? <div className="loading loading-spinner loading-lg mx-auto"></div> : <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-5">
          {
            wishLists?.map(item=> <CardOfWishList key={item._id} item={item} reloadWishList={reloadWishList}></CardOfWishList>)
          }
        </div>
      }
    </div>
  );
};

export default WishList;
