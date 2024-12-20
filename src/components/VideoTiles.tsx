import React from 'react';
import { motion } from 'framer-motion';
import VideoTile from './VideoTile';

const VideoTiles: React.FC = () => {
  const delays = [0.2, 0.4, 0.6,0.8,1.0];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest projects and creative endeavors
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {delays.map((delay, index) => (
            <VideoTile key={index} delay={delay} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTiles;