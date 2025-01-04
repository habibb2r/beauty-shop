import logo from '../../../assets/logo.png'
import { FaFacebook, FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-stone-50 text-black p-10">
  <aside>
    <img className='h-[80px]' src={logo} alt="" />
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com/habibb2r">
       <FaFacebook className='text-3xl text-blue-600'></FaFacebook>
      </a>

      <a href="https://www.linkedin.com/in/habibb2r">
        <FaLinkedin className='text-3xl text-blue-800'></FaLinkedin>
      </a>
    </div>
  </nav>
</footer>
    </div>
  );
};

export default Footer;
