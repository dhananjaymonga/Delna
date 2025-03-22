import React from "react";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import OurCompany from "./OurCompany"
import Footer from "./Footer";

const slides = [
    { id: 1, title: "Our Legacy", description: "Committed to quality and innovation for over 30 years.", image: "/image/wires.webp" },
 
    { id: 2, title: "Our Vision", description: "Striving to be a global leader in wire and cable solutions.", image: "/image/pipe.webp" },
    { id: 1, title: "Our Legacy", description: "Committed to quality and innovation for over 30 years.", image: "/image/wires.webp" },
  
    { id: 2, title: "Our Vision", description: "Striving to be a global leader in wire and cable solutions.", image: "/image/pipe.webp" },
  ];

const About = () => {
  return (
    <>
      <Navbar />
    <div className="bg-gray-100 min-h-screen   border-2 w-full">
      
      {/* Hero Section */}
      <div className=" w-full h-96 bg-cover bg-center flex items-center justify-center text-white text-center border-2" style={{ backgroundImage: "url('/image/pipe.webp')" }}>
        <div className="bg-black bg-opacity-50 p-5 rounded-lg border-2">
          <h1 className="text-3xl md:text-5xl font-bold"> Delna Electricals Pvt. Ltd.</h1>
          <p className="mt-2 text-lg">Delivering world-class electrical solutions since 2015.</p>
        </div>
      </div>

     <div className="mt-7 px-5">
        <OurCompany/>

     </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          Established in 2015, Delna Electricals Pvt. Ltd. is a Delhi-based company dedicated to providing
          world-class electrical solutions. We specialize in premium electrical wires, conduit pipes, and
          cutting-edge lighting solutions that meet the highest industry standards.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-lg leading-relaxed">
                At Delna Electricals Pvt. Ltd., our mission is to illuminate the world with the safest, most
                efficient, and innovative electrical solutions. We are committed to delivering high-quality products
                that redefine safety, durability, and performance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-lg leading-relaxed">
                Our vision is to be a global leader in the electrical industry, setting new benchmarks for quality,
                innovation, and sustainability. We aim to revolutionize how the world experiences electricity with
                cutting-edge solutions that ensure safety and energy conservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
