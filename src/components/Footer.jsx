import React from 'react';
import Link from 'next/link';
import { FaTelegramPlane, FaInstagram, FaMapMarkerAlt, FaTshirt, FaGamepad } from "react-icons/fa";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-10 px-8 mt-10 rounded-t-2xl shadow-lg shadow-blue-400">

    
      <div className="bg-blue-600 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
        <h3 className="font-bold text-xl text-white text-center mb-3 flex items-center justify-center">
          <FaMapMarkerAlt className="ml-2 text-2xl" /> شهر:
        </h3>
        <p className="text-center text-gray-200">تربت حیریه</p>
        <h3 className="font-bold text-xl text-white text-center mt-6 mb-3">نشانی:</h3>
        <p className="text-center text-gray-200">خیابان سلیمانی، پلاک 4</p>
      </div>

    
      <div className="bg-blue-600 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
        <h3 className="font-bold text-xl text-white text-center mb-3 flex items-center justify-center">
          <FaTelegramPlane className="ml-2 text-2xl" /> تلگرام:
        </h3>
        <p className="text-center text-gray-200">@EmadVended</p>
        <h3 className="font-bold text-xl text-white text-center mt-6 mb-3 flex items-center justify-center">
          <FaInstagram className="ml-2 text-2xl" /> اینستاگرام:
        </h3>
        <p className="text-center text-gray-200">vended.e</p>
      </div>

     
      <div className="bg-blue-600 p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
        <h3 className="font-bold text-xl text-white mb-4">دسته‌بندی‌ها:</h3>
        <ul className="space-y-3">
          <li>
            <Link href={"/SProduct"} className="flex items-center justify-center gap-2 text-gray-200 hover:text-white transition duration-300">
              <FaTshirt className="text-xl" /> پوشاک زنانه
            </Link>
          </li>
          <li>
            <Link href={"/BProduct"} className="flex items-center justify-center gap-2 text-gray-200 hover:text-white transition duration-300">
              <FaTshirt className="text-xl" /> پوشاک مردانه
            </Link>
          </li>
          <li>
            <Link href={"/GProduct"} className="flex items-center justify-center gap-2 text-gray-200 hover:text-white transition duration-300">
              <FaGamepad className="text-xl" /> محصولات گیمینگ
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Footer;
