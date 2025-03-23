import React from 'react';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import OurCompany from "./Component/OurCompany";
import { ProductRange } from "./Component/ProductRange";
import CableCulator from "./Component/CableCalutor";
import Footer from './Component/Footer';
import ImageCarousel from './Component/BrandSlidder';
import Resources from "./Component/Resources";
import PopupImage from "./Component/Popup"

function App() {
  return (
    <div>
      <PopupImage /> {/* Popup added here */}
      <Header />
      <Navbar />
      <OurCompany />
      <div className='px-2'>
        <ProductRange />
        <Resources />
      </div>
      <Footer />
      <ImageCarousel />
    </div>
  );
}

export default App;
