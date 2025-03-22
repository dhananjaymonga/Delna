import React from "react";
import {Link} from 'react-router-dom';

const cards = [
  {
    id: 1,
    title: "PRICELIST/BROCHURES",
    description: "Download our latest Price List and Brochure for all our Products",
    link1: "View Pricelist",
    link2: "View Brochure",
    to: "/pricelist",
    icon: "📋",
  },
  {
    id: 2,
    title: "KABEL ASSIST CALCULATOR",
    description: "Help us, Help You through our Kabel Assist Calculator.",
    link1: "Know More",
    to: "/CableCalutor",
    icon: "❓",
  },
  {
    id: 3,
    title: "RR CONNECT APP",
    description: "Earn Loyalty Points through our Loyal Management Program.",
    link1: "Know More",
    to: "/rr-connect",
    icon: "📡",
  },
];

const Resources = () => {
  return (
    <div className=" w-full flex items-center justify-center p-6 hover:bg-[#ED1C24]  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-4"> {/* ✅ Grid max-width & padding fix */}
          {cards.map((card) => (
            <div key={card.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="text-4xl mb-2">{card.icon}</div> {/* ✅ Icon size reduced */}
              <h2 className="text-lg font-bold mb-1">{card.title}</h2> {/* ✅ Title spacing adjusted */}
              <p className="text-gray-700 text-sm mb-3">{card.description}</p> {/* ✅ Text color & spacing fixed */}
              <div className="flex justify-center gap-3">
                <Link to={card.to} className="text-blue-600 font-semibold hover:underline">
                  {card.link1}
                </Link>
                {card.link2 && (
                  <>
                    <span className="text-gray-400">|</span>
                    <Link to={card.to} className="text-blue-600 font-semibold hover:underline">
                      {card.link2}
                    </Link>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};
export default Resources;
