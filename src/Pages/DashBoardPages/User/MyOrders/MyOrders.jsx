import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import useGetOrders from "../../../../Hooks/User/useGetOrders";
import MyOrdersCard from "./MyOrdersCard";


const MyOrders = () => {
    const [orders,loadorders, reloadorders] = useGetOrders()
    return (
        <div>
            <SectionTitle title={"My Orders"}></SectionTitle>
      {
        loadorders ? <div className="loading loading-spinner loading-lg mx-auto"></div> : <div>
          {orders?.length === 0 ? <h1 className="text-2xl font-bold text-center flex justify-center">No Orders</h1> : ''}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-5">
          
          {
            orders?.map(item=> <MyOrdersCard key={item._id} item={item} reloadCart={reloadorders}></MyOrdersCard>)
          }
        </div>
        </div>
      }
        </div>
    );
};

export default MyOrders;