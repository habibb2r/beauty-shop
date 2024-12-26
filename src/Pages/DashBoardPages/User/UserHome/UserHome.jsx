import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import WelComeDashboard from "../../../../Components/Reuseable/WelComeDashboard";
import useGetUserInfo from "../../../../Hooks/CommonHooks/useGetUserInfo";

const UserHome = () => {
  const [userInfo, refetch, isLoading] = useGetUserInfo();
  return (
    <div>
      <SectionTitle title={"User Home"}></SectionTitle>

      {isLoading ? (
        <div className="loading loading-spinner loading-lg"></div>
      ) : (
        <WelComeDashboard user={userInfo}></WelComeDashboard>
      )}
    </div>
  );
};

export default UserHome;
