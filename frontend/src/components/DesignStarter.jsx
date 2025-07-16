import React from 'react';

const DesignStarter = () => {
  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Design?</h2>
          <p className="text-xl mb-8">
            Unleash your creativity and design clothing that's uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              Start Designing Now
            </button>
            <button className="border-2 border-white hover:bg-indigo-700 font-bold py-3 px-8 rounded-full transition duration-300">
              Watch Tutorial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignStarter;