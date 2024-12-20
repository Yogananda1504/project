import { Monitor, Target, DollarSign, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-12 h-12 text-blue-600" />,
    title: 'Digital Billboard Advertising',
    description:
      'High-resolution digital screens strategically positioned in high-traffic areas to maximize audience engagement.'
  },
  {
    icon: <Target className="w-12 h-12 text-blue-600" />,
    title: 'Commercial Ad Campaigns',
    description:
      'Flexible advertising packages tailored to suit businesses of various sizes, providing prime visibility during peak periods.'
  },
  {
    icon: <DollarSign className="w-12 h-12 text-blue-600" />,
    title: 'Cost-Effective Solutions',
    description:
      'Scalable advertising packages designed to deliver maximum return on investment for businesses of all sizes.'
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    title: 'Innovation-Driven Approach',
    description:
      'Staying at the forefront of the latest technology and trends to ensure your campaigns stand out from the competition.'
  }
];

const Concept = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503179008861-d1e2b41f8bec?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="bg-blue-600 py-20 transition-all duration-300 ease-in-out hover:bg-opacity-90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg transform transition-transform duration-300 hover:scale-[1.02]">
            <h1 className="text-4xl text-blue-100 md:text-5xl font-bold mb-6">
              The Divedge Concept
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Dive deep into innovation, push beyond the edge of conventional advertising.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503179008861-d1e2b41f8bec?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg transform transition-all duration-300 hover:scale-[1.01]">
            <h2 className="text-3xl font-bold text-white mb-8">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="transition-all duration-300 hover:translate-y-[-4px]">
                <h3 className="text-xl font-semibold text-blue-100 mb-4">Dive</h3>
                <p className="text-white">
                  Taking the plunge with confidence and conviction. We believe in fully committing to
                  every project, diving deep into understanding our clients' needs and delivering
                  exceptional results.
                </p>
              </div>
              <div className="transition-all duration-300 hover:translate-y-[-4px]">
                <h3 className="text-xl font-semibold text-blue-100 mb-4">Edge</h3>
                <p className="text-white">
                  Pushing boundaries, stepping outside of comfort zones, and transcending limits. We
                  constantly innovate and challenge conventional advertising methods to create
                  impactful campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503179008861-d1e2b41f8bec?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 rounded-lg inline-block">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503179008861-d1e2b41f8bec?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg transform transition-all duration-300 hover:scale-[1.01]">
            <h2 className="text-3xl font-bold text-white mb-8">Our Vision</h2>
            <p className="text-lg text-white">
              To establish ourselves as the leading outdoor digital advertising company in India,
              setting new standards in innovation, creativity, and customer satisfaction while
              nurturing long-term partnerships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503179008861-d1e2b41f8bec?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="py-16 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Advertising?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create impactful campaigns that resonate with your audience.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-lg"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Concept;