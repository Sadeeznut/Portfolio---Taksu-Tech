import { FaGithub, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white py-4 pt-16">
      
      
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-sm">©️ 2024 Sadewa | All rights reserved.</h1>
        </div>
        <div className="flex space-x-4">
          
          <Link href="/">
            <FaGithub className="text-white" />
          </Link>
          <Link href="https://instagram.com/ig.sadee">
            <FaInstagram className="text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
