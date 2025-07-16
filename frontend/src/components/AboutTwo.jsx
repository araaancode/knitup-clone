import React from 'react';

const AboutTwo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-6">Sustainable Materials</h2>
            <p className="text-gray-700 mb-4">
              We're committed to reducing our environmental impact through responsible sourcing and eco-friendly production methods.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Organic cotton for all basic apparel
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Water-based, non-toxic inks
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Recycled packaging materials
              </li>
            </ul>
            <button className="text-indigo-600 font-semibold hover:underline">
              Our sustainability promise →
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-xl overflow-hidden h-80">
              <img 
                src="https://via.placeholder.com/600x400?text=Sustainable+Materials" 
                alt="Sustainable materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;