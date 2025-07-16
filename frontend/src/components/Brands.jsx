import React from 'react';

const Brands = () => {
  const brands = [
    { name: 'Brand A', logo: 'https://via.placeholder.com/150x80?text=Brand+A' },
    { name: 'Brand B', logo: 'https://via.placeholder.com/150x80?text=Brand+B' },
    { name: 'Brand C', logo: 'https://via.placeholder.com/150x80?text=Brand+C' },
    { name: 'Brand D', logo: 'https://via.placeholder.com/150x80?text=Brand+D' },
    { name: 'Brand E', logo: 'https://via.placeholder.com/150x80?text=Brand+E' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
              <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;