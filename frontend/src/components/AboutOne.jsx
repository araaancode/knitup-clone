import React from 'react';

const AboutOne = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, we started with a simple idea: everyone deserves clothing that expresses their unique personality.
            </p>
            <p className="text-gray-700 mb-4">
              What began as a small custom print shop has grown into a platform that empowers thousands to create their own designs.
            </p>
            <button className="text-indigo-600 font-semibold hover:underline">
              Learn more about our journey →
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-xl overflow-hidden h-80">
              <img 
                src="https://via.placeholder.com/600x400?text=Our+Team" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;