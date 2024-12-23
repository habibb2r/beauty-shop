import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../Components/Reuseable/SectionTitle';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <div>
        <SectionTitle title={"Contact Us"}></SectionTitle>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: true })}
            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            {...register('message', { required: true })}
            className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          ></textarea>
          {errors.message && <span className="text-red-500">Message is required</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
