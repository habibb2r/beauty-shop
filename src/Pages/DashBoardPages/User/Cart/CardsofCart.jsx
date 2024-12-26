import Swal from 'sweetalert2';
import removeimg from '../../../../assets/basic-icons/delete.png'
import useAxiosSecure from '../../../../Hooks/CommonHooks/useAxiosSecure';

const CardsofCart = (data) => {
    console.log(data)
    const axiosSecure = useAxiosSecure();
    const handleRemoveCart = (id) =>{
        axiosSecure.delete(`/removeCart/${id}`)
        .then(res => {
            if(res.data.deletedCount){
                data.reloadCart();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Removed..!!",
                    showConfirmButton: false,
                    timer: 2500,
                  });
            }
        }
        )
    }
    return (
        <div className="flex justify-between items-center gap-1 shadow-lg shadow-accent px-3 py-2 rounded-2xl">
            <div className="flex justify-center items-center gap-3 bg-slate-100 px-5 py-3 rounded-md">
            <img className="h-[150px] rounded-lg shadow-lg" src={data?.item?.itemImage} alt="" />
            <div>
            <h1 className="font-bold text-xl">{data?.item?.itemName}</h1>
            <p className="font-bold">Price : {data?.item?.itemPrice}$</p>
            </div>
        </div>
        <div>
            <button onClick={()=>handleRemoveCart(data?.item?._id)}><img className='h-[40px]' src={removeimg} alt="" /></button>
        </div>
        </div>
    );
};

export default CardsofCart;