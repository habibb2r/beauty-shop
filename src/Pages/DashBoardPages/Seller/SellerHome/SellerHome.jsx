import React from "react";
import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import useGetUserInfo from "../../../../Hooks/CommonHooks/useGetUserInfo";
import WelComeDashboard from "../../../../Components/Reuseable/WelComeDashboard";
import Loading from "../../../../Components/Reuseable/Loading";

const SellerHome = () => {
  const [userInfo, refetch, isLoading] = useGetUserInfo();
  return (
    <div>
      <SectionTitle title={"Seller Home"}></SectionTitle>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <WelComeDashboard user={userInfo}></WelComeDashboard>
      )}
    </div>
  );
};

export default SellerHome;
