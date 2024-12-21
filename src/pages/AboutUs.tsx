import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Linkedin } from 'lucide-react';

import DivedgeContent from '../components/DivedgeContent';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
};
const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const founders = [
  {
    name: 'Dinesh Reddy Velpucherla',
    role: 'Director',
    image: '/assets/dnv.jpeg',
    bio: 'Visionary leader with extensive experience in digital advertising and business strategy.',
    education: " Graduation in mechanical engineering, Post Graduation in shipping management, London.",
    social: { linkedin: 'https://www.linkedin.com/in/dinesh-reddy-velpucherla-44148b194/' }
  },
  {
    name: 'Sateesh Kumar Sriramula',
    role: 'Co-Director',
    image: '/assets/image.png',
    bio: 'Innovation Advisor',
    education: ' Graduation in mechanical engineering',
    social: { linkedin: '#', twitter: '#', instagram: '#' }
  }
];

function AnimatedTitle({ text }: { text: string }) {
  return (
    <motion.h1
      className="text-5xl font-extrabold text-white-300 max-w-3xl drop-shadow-xl bg-black bg-opacity-40 p-4 rounded-md overflow-y-hidden font-sans"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={charVariants} className="inline-block font-serif">
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

const AboutUs = () => (
  <div className="min-h-screen pt-16 text-center overflow-x-hidden overflow-y-hidden bg-gray-100">
    <Parallax translateY={[-20, 20]}>
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-white py-20 relative overflow-y-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/2104648-hd_1280_720_30fps.mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-left">
          <AnimatedTitle text="Divedge" />
          <p className="text-5xl font-semibold text-blue-300 max-w-3xl drop-shadow-xl bg-black bg-opacity-40 p-4 rounded-md mt-6">
            <motion.span
              className="inline-block animate-shimmer bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 bg-[length:200%_100%] text-transparent bg-clip-text font-serif"
              animate={{
                backgroundPosition: ["100% 0", "-100% 0"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Step into the Spotlight
              <br />
              No one can miss you now !
            </motion.span>
          </p>
        </div>
      </motion.section>
    </Parallax>
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8 font-serif animate-shimmer">
          Our Mission
        </h2>
        <p className="text-xl text-gray-700 max-w-4xl text-center mx-auto leading-relaxed relative overflow-hidden">
          <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r "></span>
          At Divedge, our mission is to redefine outdoor advertising by transforming ordinary spaces into extraordinary platforms of communication. We strive to help businesses connect with their audiences in a dynamic, impactful, and meaningful way.

          By leveraging cutting-edge digital display technology and strategically curated locations, we aim to deliver advertising experiences that not only captivate but also inspire. Our focus is to create bold, innovative campaigns that enhance brand visibility, foster engagement, and drive measurable results for our clients.

          Rooted in the ethos of “Dare to Dive, Go Beyond the Edge,” we empower businesses to take that leap into the future of outdoor advertising. At Divedge, we are committed to pushing boundaries and ensuring that every message delivered makes a lasting impression.

          Together, we build bridges between brands and their audiences, turning every advertisement into an opportunity for success.
        </p>
      </div>
      <DivedgeContent/>
    </motion.section>
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 font-serif">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map(f => (
            <motion.div
              key={f.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -5, scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden max-w-full"
            >
              <div className="p-6">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-2 border-blue-500"
                />
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 font-sans">
                  {f.name}
                </h3>
                <p className="text-blue-600 text-center mb-4 font-medium">{f.role}</p>
                <p className="text-gray-700 mb-4">{f.bio}</p>
                <p className="text-gray-500 mb-6 italic">{f.education}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={f.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={f.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500"
                  >
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  </div>
);

export default AboutUs;
