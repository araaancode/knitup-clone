import React from 'react';

const VerticalClothes = () => {
  const clothes = [
    { id: 1, image: '../images/longsleeve.png', name: 'T-Shirts' },
    { id: 2, image: 'https://via.placeholder.com/300x400?text=Hoodie', name: 'Hoodies' },
    { id: 3, image: 'https://via.placeholder.com/300x400?text=Polo', name: 'Polos' },
    { id: 4, image: 'https://via.placeholder.com/300x400?text=Sweatshirt', name: 'Sweatshirts' },
    { id: 5, image: 'https://via.placeholder.com/300x400?text=Tank+Top', name: 'Tank Tops' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
          {clothes.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-64">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalClothes;