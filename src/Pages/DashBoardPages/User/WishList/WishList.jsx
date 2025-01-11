import React from "react";
import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import useGetWishList from "../../../../Hooks/User/useGetWishList";
import CardOfWishList from "./CardsOfWishList";
import Loading from "../../../../Components/Reuseable/Loading";

const WishList = () => {
  const[wishLists ,loadWishList, reloadWishList] =useGetWishList()
  return (
    <div className="pb-[10%]">
      <SectionTitle title={"WishList"}></SectionTitle>
      {
        loadWishList ? <Loading></Loading> : <div>
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
