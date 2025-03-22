import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Navbar from "./Navbar";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/Data/Faqpage.json") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-10 px-5 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
        {faqs.map((category, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-3">{category.category}</h3>
            {category.items.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 border-b pb-3">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 py-3"
        onClick={() => setOpen(!open)}
      >
        {question}
        <FaChevronDown className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden text-gray-600 px-4"
      >
        {answer}
      </motion.div>
    </div>
  );
};

export default FAQPage;
