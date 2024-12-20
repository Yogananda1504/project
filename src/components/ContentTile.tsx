import React from 'react';
import { motion } from 'framer-motion';

interface ContentTileProps {
  title: string;
  description: string;
  index: number;
  className?: string;
}

const ContentTile: React.FC<ContentTileProps> = ({ title, description, index }) => {
  const xOffset = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -xOffset, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: index * 0.2,
      }}
      viewport={{ amount: 0.3 }}
      className="bg-gradient-to-r from-indigo-50 to-purple-100 rounded-2xl shadow-md p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-sans"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 drop-shadow-lg">{title}</h3>
      <p className="text-gray-700 leading-relaxed transition-colors duration-300 hover:text-gray-900">{description}</p>
      
       
    </motion.div>
  );
};

export default ContentTile;