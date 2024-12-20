import React from 'react';
import { motion } from 'framer-motion';

interface ContentTileProps {
  title: string;
  description: string;
  index: number;
}

const ContentTile: React.FC<ContentTileProps> = ({ title, description, index }) => {
  const xOffset = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -xOffset }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: index * 0.2,
      }}
      viewport={{ amount: 0.3 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ContentTile;