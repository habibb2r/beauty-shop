
import { FaFacebook, FaFacebookF, FaInstagram, FaLink, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import SectionTitle from '../Reuseable/SectionTitle';
import { Link } from 'react-router-dom';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdAddCall, MdEmail } from 'react-icons/md';
import Lottie from 'lottie-react';
import ani from './contact.json'
import { AiOutlineGlobal } from 'react-icons/ai';
const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <SectionTitle title={"Contact Info"} />
      <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-5'>
      <div className="flex flex-col justify-start items-start gap-5">
        <div className="text-gray-700 flex flex-col justify-start items-start gap-3">
          <div className='flex items-start gap-2'>
          <FaMapLocationDot className='text-xl text-blue-500' />
          <p>123 Muradpur, Chittagong-4212, Bangladesh</p>
          </div>
          <div className='flex items-center gap-2'>
          <MdAddCall className='text-xl text-blue-500' />
          <p>01XXXXXXXXX</p>
          </div>
          <div className='flex items-center gap-2'>
          <MdEmail  className='text-xl text-blue-500' />
          <p>habibhk127@gmail.com</p>
          </div>
          
        </div>
        <div className="text-gray-700 flex flex-col justify-start items-start gap-3">
        <div className='flex items-center gap-2'>
        <FaLink className='text-xl text-blue-500'/>
        <h2 className="text-xl font-semibold mb-2">Links</h2>
        </div>
          <div className='grid grid-cols-4 gap-4'>
            <Link to={"/"} className="text-blue-800 font-semibold">Home</Link>
            <Link to={"/about"} className="text-blue-800 font-semibold">About</Link>
            <Link to={"/products"} className="text-blue-800 font-semibold">Products</Link>
            <Link to={"/contact"} className="text-blue-800 font-semibold">Contact</Link>
          </div>
        </div>
        <div className="text-gray-700 flex flex-col justify-start items-start gap-3">
        <div className='flex items-center gap-2'>
        <FaLink className='text-xl text-blue-500'/>
        <h2 className="text-xl font-semibold mb-2">Social Links</h2>
        </div>
          <div className='grid grid-cols-4 gap-4 text-4xl'>
            <a href="https://www.facebook.com/habibb2r" className="text-blue-600 font-semibold"><FaFacebook /></a>
            <a href="https://www.instagram.com/habibb2r" className="text-red-600 font-semibold"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/habibb2r" className="text-blue-800 font-semibold"><FaLinkedin /></a>
            <a href="https://habibb2r.site" className="text-purple-800 font-semibold"><AiOutlineGlobal /></a>
          </div>
        </div>
      </div>
      <div>
        <Lottie animationData={ani}></Lottie>
      </div>
      </div>
    </div>
  );
};

export default ContactInfo;
