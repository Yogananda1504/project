import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 overflow-x-hidden ">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Get in touch with us for your advertising needs.
          </p>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+917382288078" className="text-gray-600 hover:text-blue-600">
                      +91 7382288087
                    </a>
                    <br />
                    <a href="tel:+918886226074" className="text-gray-600 hover:text-blue-600">
                      +91 8886226074
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:diveedgeads@outlook.com" className="text-gray-600 hover:text-blue-600">
                      diveedgeads@outlook.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Instagram className="w-6 h-6 text-red-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Instagram</p>
                    <a
                      href="https://instagram.com/divedge_3924"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      @divedge_3924
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon size="1x" icon={faWhatsapp} className="w-6 h-6 text-green-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <a
                      href="https://wa.me/message/FIGVC6ZCQNFWK1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      Kadapa City,<br />
                      Andhra Pradesh,<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Container for the quotation image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quotation</h2>
                <img
                  src="/assets/9011aa04-cef9-40bc-80b5-c611a1f15326.jpeg" // Replace with your image path
                  alt="Business Quotation"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3863.138489433364!2d78.823454!3d14.476736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDI4JzM2LjMiTiA3OMKwNDknMjQuNCJF!5e0!3m2!1sen!2sin!4v1734687832049!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;