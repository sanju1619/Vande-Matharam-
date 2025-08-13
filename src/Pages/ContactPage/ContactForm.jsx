// src/components/ContactFormSection.jsx
import React from 'react';

const ContactFormSection = () => {
  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-gray-800 font-heading mb-6">Send us a Message</h2>
            <form action="#" method="POST">
              <div className="space-y-5">
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  placeholder="Subject" 
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
                <textarea 
                  name="message" 
                  id="message" 
                  rows="6" 
                  placeholder="Message"
                  className="w-full p-4 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>
              <div className="mt-6">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-yellow-400 text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Map Placeholder */}
          <div className="w-full h-full min-h-[500px] flex flex-col justify-between">
             {/* This div will hold the map */}
             <div className="bg-gray-200 h-full flex-grow rounded-lg flex items-center justify-center text-center p-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-600">Our Location</h3>
                    <p className="text-gray-500 mt-2">A map showing our location will be displayed here.</p>
                    {/* For a real map, you would integrate a library like react-google-maps */}
                </div>
            </div>
            {/* Contact details can go below the map */}
            <div className="mt-6 text-gray-600">
                <p><span className="font-bold">Address:</span> 123 Gurukulam Lane, Knowledge City, KA 560001</p>
                <p><span className="font-bold">Email:</span> contact@vmgurukulam.org</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
