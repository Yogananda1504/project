import { Mail, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="flex justify-center items-center">
              <img 
                src="public/assets/WhatsApp_Image_2024-12-19_at_2.53.25_PM-removebg-preview__1_-removebg-preview.png" 
                alt="Divedge Pvt. Ltd." 
                className="w-50 h-50 object-contain"
              />
              </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <div className="space-y-2">
              <a href="tel:+917382288078" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <Phone size={16} className="mr-2 text-blue-400" />
                +91 7382288087
              </a>
              <a href="tel:+918886226074" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <Phone size={16} className="mr-2 text-blue-400" />
                +91 8886226074
              </a>
              <a href="mailto:diveedgeads@outlook.com" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <Mail size={16} className="mr-2 text-blue-400" />
                diveedgeads@outlook.com
              </a>
              <a href="https://instagram.com/divedge_3924" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <FontAwesomeIcon icon={faInstagram} className="mr-2 text-pink-500" />
                @divedge_3924
              </a>
              <a href="https://wa.me/message/FIGVC6ZCQNFWK1" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200">
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-green-500" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2">
              Location
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Kadapa City,<br />
              Andhra Pradesh,<br />
              India
            </p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Divedge Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;