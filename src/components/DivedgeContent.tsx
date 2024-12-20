import React from 'react';
import { motion } from 'framer-motion';
import ContentTile from './ContentTile';

const content = [
  {
    title: "Why Choose Divedge",
    description: "Choosing Divedge Pvt. Ltd. means choosing innovation, impact, and results. Here's why we stand out as your ideal outdoor digital advertising partner."
  },
  {
    title: "Strategic Locations",
    description: "We position our high-resolution digital displays in prime urban and suburban locations, ensuring your advertisements reach the right audience at the right time for maximum visibility and engagement."
  },
  {
    title: "Dynamic & Engaging Content",
    description: "Unlike static billboards, our digital screens showcase vibrant, real-time content that grabs attention and resonates with viewers. Update campaigns effortlessly to stay relevant and impactful."
  },
  {
    title: "Customised Solutions",
    description: "Whether you're a start-up, SME, or established brand, we offer tailored advertising packages designed to suit your goals, budget, and target demographics."
  },
  {
    title: "Cost-Effective Advertising",
    description: "Our scalable solutions maximise your return on investment, making high-impact outdoor advertising accessible to businesses of all sizes."
  },
  {
    title: "Innovation-Driven Approach",
    description: "We embrace the latest in digital technology and trends, ensuring your campaigns are ahead of the curve and stand out in today's competitive market."
  },
  {
    title: "Customer-Centric Focus",
    description: "At Divedge, we don't just deliver advertisements; we build lasting partnerships. Our team works closely with you to understand your vision and turn it into a compelling reality."
  },
  {
    title: "Measurable Impact",
    description: "With our advanced digital systems, you can track the success of your campaigns and make informed decisions to optimise your marketing efforts."
  }
];

const DivedgeContent: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Divedge
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your Premier Digital Advertising Partner
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.map((item, index) => (
            <ContentTile
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivedgeContent;