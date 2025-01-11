import React from "react";
import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import WelComeDashboard from "../../../../Components/Reuseable/WelComeDashboard";
import useGetUserInfo from "../../../../Hooks/CommonHooks/useGetUserInfo";
import Loading from "../../../../Components/Reuseable/Loading";

const AdminHome = () => {
  const [userInfo, refetch, isLoading] = useGetUserInfo();
  return (
    <div>
      <SectionTitle title={"Admin Home"}></SectionTitle>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <WelComeDashboard user={userInfo}></WelComeDashboard>
      )}
    </div>
  );
};

export default AdminHome;
