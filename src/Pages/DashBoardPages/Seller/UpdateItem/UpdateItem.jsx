import React from 'react';
import SectionTitle from '../../../../Components/Reuseable/SectionTitle';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/CommonHooks/useAxiosSecure';


const img_hosting = import.meta.env.VITE_img_host;
const img_upload_preset = import.meta.env.VITE_preset;
const img_cloud_name = import.meta.env.VITE_cloud;
const UpdateItem = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const itemDetails = location?.state?.item;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {

  }
    return (
        <div>
            <SectionTitle title={"Update Item"}></SectionTitle>
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
              defaultValue={itemDetails?.name}
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
            >
                {itemDetails?.description}
            </textarea>
          </label>
          <div className="grid md:grid-cols-2 gap-5">
          <label className="form-control md:w-full">
              <div className="label">
                <span className="label-text">* Product Category</span>
              </div>
              <input
                className="input input-bordered input-primary md:w-[100px] max-w-md"
                type="text"
                defaultValue={itemDetails?.category}
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
                defaultValue={itemDetails?.brand}
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
                defaultValue={itemDetails?.price.present_price}
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
                defaultValue={itemDetails?.price.previous_price}
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

export default UpdateItem;