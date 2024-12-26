import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting = import.meta.env.VITE_img_host;
const img_upload_preset = import.meta.env.VITE_preset;
const img_cloud_name = import.meta.env.VITE_cloud;
import { useLocation } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/CommonHooks/useAxiosSecure";
import SectionTitle from "../../../../Components/Reuseable/SectionTitle";

const AddItems = () => {
  const location = useLocation();
  const category = location?.state?.category;
  const hosting_url = img_hosting;
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    // console.log(data);
    console.log(errors)
    const imgdata = new FormData();
    const image = data.image[0];
    imgdata.append("file", image);
    imgdata.append("upload_preset", img_upload_preset);
    imgdata.append("cloud_name", img_cloud_name);

    try {
      if (image === null) {
        return alert("Please Upload image");
      }

      const res = await fetch(hosting_url, {
        method: "POST",
        body: imgdata,
      });

      const cloudData = await res.json();
      // console.log(cloudData);
      const imgURL = cloudData.url;
      if (imgURL) {
        const additemdata = {
          name: data.product_name,
          picture: imgURL,
          brand: data.brand,
          price: {
            previous_price: data.previous_price,
            present_price: data.present_price,
            onOffer: data.offer,
          },
            description: data.description,
            category: data.category,
            isFeatured: data.isFeatured
        };

        axiosSecure.post("/addItems", additemdata).then((res) => {
          if (res.data) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added Items Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `{error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(error);
    }

  };

  return (
    <div>
      <SectionTitle title={"Add Items"}></SectionTitle>
      <div className="flex flex-col justify-center items-center gap-5 py-5 pb-[15%] bg-accent bg-opacity-10 rounded-lg">
        <form
          className="flex flex-col justify-center items-center gap-3 shadow-md shadow-primary bg-accent bg-opacity-20 px-5 py-5 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">* Product Name</span>
            </div>
            <input
              className="input input-bordered input-primary md:w-full "
              type="text"
              placeholder="product_name"
              {...register("product_name", { required: true })}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">* Product Description</span>
            </div>
            <textarea placeholder="Enter Product Description here"
              className="textarea textarea-bordered textarea-lg w-[300px] md:w-full h-[150px]  textarea-primary"
              {...register("description", { required: true })}
            />
          </label>
          <div className="grid md:grid-cols-2 gap-5">
          <label className="form-control md:w-full">
              <div className="label">
                <span className="label-text">* Product Category</span>
              </div>
              <input
                className="input input-bordered input-primary md:w-[100px] max-w-md"
                type="text"
                placeholder="Category"
                {...register("category",{required: true})}
              />
            </label>
          

          <label className="form-control md:w-full">
              <div className="label">
                <span className="label-text">* Brand</span>
              </div>
              <input
                className="input input-bordered input-primary md:w-[100px] max-w-md"
                type="text"
                placeholder="Brand"
                {...register("brand",{required: true})}
              />
            </label>
          
          </div>
          <div className="flex justify-center">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">* Product Image</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              {...register("image")}
            />
          </label>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">* Present Price</span>
              </div>
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                type="number"
                placeholder="present_price"
                {...register("present_price", { required: true })}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">* Previous Price</span>
              </div>
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                type="number"
                placeholder="previous_price"
                {...register("previous_price", { required: true })}
              />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">* Select Discount</span>
              </div>
              <select
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("offer", {
                  setValueAs: (value) =>
                    value === "true" ? true : value === "false" ? false : "",
                })}
              >
                <option value={""}>Discount?</option>
                <option value={"true"}>Yes</option>
                <option value={"false"}>No</option>
              </select>
            </label>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 py-2">
          </div>

          <input className="btn btn-success" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;