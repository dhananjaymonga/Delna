import React from 'react'
import Navbar from './Navbar'
import OurComapny from "./OurCompany"
const About = () => {
    const slides = [
        {
          id: 1,
          title: "Our Legacy",
          description: "Committed to quality and innovation for over 30 years.",
          image: "/images/legacy.jpg",
        },
        {
          id: 2,
          title: "Our Vision",
          description: "Striving to be a global leader in wire and cable solutions.",
          image: "/images/vision.jpg",
        },
        {
          id: 3,
          title: "Our Commitment",
          description: "Dedicated to sustainability and customer satisfaction.",
          image: "/images/commitment.jpg",
        },
      ];
  return (
    
    <div className='px-5'>
        <Navbar/>
        <OurComapny/>
       
<article className='mt-4'>
Our journey began close to 30 years ago and today we are one of India’s largest conglomerates in the electrical sector. Spread across multiple business verticals including Wires & Cables, Switches, Fans, Lighting, Switchgears & Appliances, we continue to endeavor to create top-quality products using futuristic advances in design and engineering. We offer an extensive range of products used for residential, commercial, industrial, and infrastructure purposes.

We believe that the future of our industry lies in innovation and effective R&D, which in turn helps one to push boundaries and eliminate borders. We at RR Kabel Ltd. believe in this and therefore are constantly emerging with new products focusing on quality, safety, and affordability.
</article>
         </div>
  )
}

export default About