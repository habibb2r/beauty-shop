import Swal from 'sweetalert2';
import deleteImg from '../../../../assets/basic-icons/delete.png'
import editimg from '../../../../assets/basic-icons/edit.png'
import SectionTitle from '../../../../Components/Reuseable/SectionTitle';
import useAxiosSecure from '../../../../Hooks/CommonHooks/useAxiosSecure';
import useViewAllItems from '../../../../Hooks/Seller/useViewAllItems';

const ManageItems = () => {
    const [viewItems, refetchAllItems, loadItems] = useViewAllItems()
    const axiosSecure = useAxiosSecure();
    const handleDeleteProduct = (item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/deleteItem/${item._id}`)
              .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount){
                    refetchAllItems()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
    return (
        <div className='px-10'>
            <SectionTitle title={"Manage Items"}></SectionTitle>
             <div className="overflow-x-auto mx-auto pb-[15%]">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                         
                          <th>Item Info</th>
                          <th>Item Status</th>
                          <th>Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            loadItems ? <div className='loading loading-spinner loading-lg flex justify-center'></div> : ''
                        }
                        {
                            viewItems?.map(item=> <tr key={item._id}>
                                <td>
                                  <div className="flex items-center gap-3">
                                    <div className="avatar">
                                      <div className="mask mask-squircle h-12 w-12">
                                        <img
                                          src={item?.picture}
                                          alt="Avatar Tailwind CSS Component"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-bold">{item?.name}</div>
                                      <div className="text-sm opacity-50">{item?.brand}</div>
                                      <div className="text-sm opacity-50">{item?.category}</div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{item?.price.onOffer? "On Offer" : "Not On Offer"}</span>
                                  <br />
                                  <span className="badge badge-ghost badge-sm">
                                    {item?.isFeatured? "Featured" : "Not Featured"}
                                  </span>
                                </td>
                                <td>
                                    <div className='flex flex-col justify-start items-start gap-3'>
                                        <span className='font-bold'>{item?.price.present_price}$</span>
                                        <span className='line-through font-semibold'>{item?.price.previous_price}$</span>
                                    </div>
                                </td>
                                <th>
                                  <div className='flex justify-start items-center gap-5'>
                                    <button  onClick={()=>handleManageRole(item)}><img className='h-[40px]' src={editimg} alt="" /></button>
                                    <button  onClick={()=>handleDeleteProduct(item)}><img className='h-[40px]' src={deleteImg} alt="" /></button>
                                  </div>
                                </th>
                              </tr>)
                        }
                      </tbody>
                      {/* foot */}
                    </table>
                  </div>
        </div>
    );
};

export default ManageItems;