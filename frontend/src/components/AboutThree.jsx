import React from 'react';

const AboutThree = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Design Process</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Our intuitive design tools make it easy to create professional-quality custom apparel, even if you've never designed before.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-indigo-600 text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Product</h3>
              <p className="text-gray-600">Select from t-shirts, hoodies, and more in various colors and sizes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-indigo-600 text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Design Your Style</h3>
              <p className="text-gray-600">Use our tools to upload artwork, add text, and customize every detail.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-indigo-600 text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Receive Your Creation</h3>
              <p className="text-gray-600">We print and ship your custom design within 5-7 business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;