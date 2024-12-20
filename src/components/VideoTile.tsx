import React from 'react';
import { motion } from 'framer-motion';

interface VideoTileProps {
  delay: number;
  index: number;
}

const VideoTile: React.FC<VideoTileProps> = ({ delay, index }) => {
  const xOffset = index % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -xOffset }} // Opposite direction for exit
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay,
        duration: 0.8
      }}
      viewport={{ amount: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="relative aspect-video rounded-lg shadow-xl overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 group"
    >
      <div className="absolute inset-0 flex items-center justify-center text-white font-semibold bg-black bg-opacity-30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Video Coming Soon
      </div>
    </motion.div>
  );
};

export default VideoTile;