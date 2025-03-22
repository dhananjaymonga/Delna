import React, { useEffect, useState } from "react";

export default function ContactPage() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    fetch("/Data/contact.json")
      .then((response) => response.json())
      .then((data) => setContactData(data))
      .catch((error) => console.error("Error fetching contact data:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      
      {contactData && (
        <>
          {/* Head Office */}
          <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Head Office</h2>
            <p><strong>Address:</strong> {contactData.headOffice.address}</p>
            <p><strong>Phone:</strong> {contactData.headOffice.phone}</p>
            <p><strong>Email:</strong> {contactData.headOffice.email}</p>
          </section>

          {/* Branch Offices */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Branch Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactData.branchOffices.map((office, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium">{office.city}</h3>
                  <p><strong>Address:</strong> {office.address}</p>
                  <p><strong>Phone:</strong> {office.phone}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Order Inquiry & Support */}
          <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Inquiry & Customer Support</h2>
            <p><strong>Email:</strong> {contactData.support.email}</p>
            <p><strong>Phone:</strong> {contactData.support.phone}</p>
          </section>

          {/* Contact Form */}
          <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
              <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows="4" required></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </section>

          {/* Google Maps (Optional) */}
          {contactData.googleMapsEmbed && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Find Us on the Map</h2>
              <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222993.98531839205!2d75.59072417645154!3d29.156390001607534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1742641024855!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
            </section>
          )}
        </>
      )}
    </div>
  );
}
