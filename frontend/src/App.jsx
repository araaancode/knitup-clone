import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VerticalClothes from './components/VerticalClothes';
import PhotoSlider from './components/PhotoSlider';
import AboutOne from './components/AboutOne';
import AboutTwo from './components/AboutTwo';
import Brands from './components/Brands';
import AboutThree from './components/AboutThree';
import DesignStarter from './components/DesignStarter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <VerticalClothes />
      <PhotoSlider />
      <AboutOne />
      <AboutTwo />
      <Brands />
      <PhotoSlider reverse={true} />
      <AboutThree />
      <DesignStarter />
      <Footer />
    </div>
  );
}

export default App;