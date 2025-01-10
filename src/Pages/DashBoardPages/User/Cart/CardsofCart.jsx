import Swal from "sweetalert2";
import removeimg from "../../../../assets/basic-icons/delete.png";
import useAxiosSecure from "../../../../Hooks/CommonHooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/CommonHooks/useAuth";

const CardsofCart = (data) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (orderData) => {
    const item = {
      orderData,
      ...data.item,
      cartId: data.item._id,
      orderEmail: user.email,
    };

    axiosSecure.post('/makeOrder', item).then(res=>{

        document.getElementById("confirm_order").close()
        if(res.data.status){
            data.reloadCart()
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${res.data.message}`,
                showConfirmButton: false,
                timer: 2500,
              });
        }else{
            Swal.fire({
                position: "center",
                icon: "error",
                title:`${res.data.message}`,
                showConfirmButton: false,
                timer: 2500,
              });
              data.reloadCart()
        }
        
    })
    console.log(item);
  };
  console.log(errors);
  const handleRemoveCart = (id) => {
    axiosSecure.delete(`/removeCart/${id}`).then((res) => {
      if (res.data.deletedCount) {
        data.reloadCart();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Removed..!!",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-1 shadow-lg shadow-accent px-3 py-3 md:py-2 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 bg-slate-100 px-5 py-3 rounded-md">
        <img
          className="h-[150px] rounded-lg shadow-lg"
          src={data?.item?.itemImage}
          alt=""
        />
        <div>
          <h1 className="font-bold text-xl">{data?.item?.itemName}</h1>
          <div>
            <p className="font-semibold">
              Price :{" "}
              <span className="font-bold text-slate-600">
                {data?.item?.itemPrice}{" "}
              </span>{" "}
              TK
            </p>
            <p className="font-semibold">
              Quantity :{" "}
              <span className="font-bold text-slate-600">
                {data?.item?.quantity}
              </span>
            </p>
            <p className="font-semibold">
              Total Price :{" "}
              <span className="font-bold text-slate-600">
                {data?.item?.quantity} x {data?.item?.itemPrice} ={" "}
                {data?.item?.totalPrice}{" "}
              </span>{" "}
              TK
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col justify-between md:justify-center items-center gap-10 md:gap-5">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="px-3 py-2 rounded-md bg-green-800 text-white"
          onClick={() => document.getElementById("confirm_order").showModal()}
        >
          Confirm Order
        </button>
        <dialog
          id="confirm_order"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className="bg-blue-100 px-3 py-2 rounded-xl">
              <h1 className="pb-2 border-b-2 text-xl md:text-2xl font-semibold md:w-[70%] border-black">
                Provide Order Information
              </h1>
              <form
                className="flex flex-col justify-start items-center gap-3 py-3"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered input-info w-full max-w-xs"
                  {...register("name")}
                />
                <textarea
                  className="textarea textarea-info w-full max-w-xs"
                  placeholder="Address"
                  {...register("address")}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered input-info w-full max-w-xs"
                  {...register("phone")}
                />

                <input
                  value="Confirm Order"
                  className="px-3 py-2 bg-green-400 text-black font-semibold rounded-xl my-3"
                  type="submit"
                />
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>

        <button onClick={() => handleRemoveCart(data?.item?._id)}>
          <img className="h-[40px] w-[50px]" src={removeimg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default CardsofCart;
