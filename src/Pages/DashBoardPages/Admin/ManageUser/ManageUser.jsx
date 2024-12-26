import userpic from '../../../../assets/basic-icons/user.png'
import SectionTitle from "../../../../Components/Reuseable/SectionTitle";
import useGetAllUser from "../../../../Hooks/Admin/useGetAllUser";
import upgrade from '../../../../assets/basic-icons/level-up.png';
import downgrade from '../../../../assets/basic-icons/level-down.png';
import deleteimg from '../../../../assets/basic-icons/delete.png'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/CommonHooks/useAxiosSecure';


const ManageUser = () => {
  const [manageUsers, refetch, isLoading] = useGetAllUser();
  const axiosSecure = useAxiosSecure()
  console.log(manageUsers);

  const handleDeleteUser =(user)=>{
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
        axiosSecure.delete(`/manageUsers?email=${user.email}`)
        .then(res=>{
            if(res.data.status){
                refetch()
                Swal.fire({
                    title: "Removed!",
                    text: "User removed",
                    icon: "success"
                  });
            }
        })
      }
    });
  }

  const handleManageRole =(user)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${user?.role === 'customer' ? 'Make Seller': "Make Customer"}`
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/manageUsers?email=${user.email}`)
        .then(res=>{
            if(res.data.status){
                refetch()
                Swal.fire({
                    title: "User role Updated!",
                    text: "User Updated Successfully",
                    icon: "success"
                  });
            }
        })
       
      }
    });
  }
  return (
    <div>
      <SectionTitle title={"Manage User"}></SectionTitle>
      <div className="overflow-x-auto px-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>User Info</th>
              <th>Account Creation</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                isLoading ? <div className='loading loading-spinner loading-lg flex justify-center'></div> : ''
            }
            {
                manageUsers.map(user=> <tr key={user._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={user?.picture? user.picture : userpic}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user?.name}</div>
                          <div className="text-sm opacity-50">{user?.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {user?.createdDate}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {user?.createdTime}
                      </span>
                    </td>
                    <td><div className={`px-3 py-2 rounded-xl font-bold text-center text-white ${user?.role === "admin" ? "bg-blue-950" : user?.role === "seller" ? "bg-orange-900" : "bg-black"}`}>{user?.role}</div></td>
                    <th>
                      <div className='flex justify-start items-center gap-5'>
                        <button className={user?.role === "admin" ? "btn-disabled" : ""} onClick={()=>handleManageRole(user)}><img className='h-[40px]' src={user?.role === "admin" ? downgrade : upgrade} alt="" /></button>
                        <button  onClick={()=>handleDeleteUser(user)}><img className='h-[40px]' src={deleteimg} alt="" /></button>
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

export default ManageUser;
