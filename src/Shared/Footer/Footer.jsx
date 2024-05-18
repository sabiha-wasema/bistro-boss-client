import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="bg-[#1F2937] text-white py-6 flex flex-col justify-end items-center">
          <h1>CONTACT US</h1>
          <div className="text-center text-xs mt-3">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-[#111827] text-white py-6 flex flex-col justify-start items-center">
          <h1>Follow US</h1>
          <p className="text-xs mt-3">Join us on social media</p>
          <div className="flex justify-center items-center mt-4 gap-4">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="bg-[#151515] text-white py-2 text-center">
        <p>
          Copyright &copy; {currentYear}, CulinaryCloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
