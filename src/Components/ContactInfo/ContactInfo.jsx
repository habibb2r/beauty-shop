
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import SectionTitle from '../Reuseable/SectionTitle';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-10">
      <SectionTitle title={"Contact Info"} />
      <div className="flex justify-center items-start gap-16">
        <div className="text-gray-700">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>123 Muradpur</p>
          <p>Chittagong, Bangladesh</p>
          <p>4212</p>
          <p>Phone: 018888888</p>
        </div>
        <div className="text-gray-700">
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <ul>
            <li><Link to={"/"} className="text-blue-500 hover:underline">Home</Link></li>
            <li><Link to={"/about"} className="text-blue-500 hover:underline">About</Link></li>
            <li><Link to={"/products"} className="text-blue-500 hover:underline">Products</Link></li>
            <li><Link to={"/contact"} className="text-blue-500 hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
