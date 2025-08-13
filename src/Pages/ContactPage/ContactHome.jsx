// src/pages/ContactPage.jsx
import React from 'react';

// --- IMAGE PLACEHOLDER ---
// You should replace this with an image relevant to contacting you, like your location or team.
import heroImage from '../../assets/images/img_2.jpg'; 
import ContactFormSection from './ContactForm';
import ContactDetailsSection from './Details';

const ContactPage = () => {
  return (
    <>
      {/* Main Hero Section for the Contact Page */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-32">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-heading">
            Get in Touch
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl font-sans">
            We would love to hear from you. Whether you have a question, a suggestion, or want to get involved, please don't hesitate to reach out.
          </p>
        </main>
      </div>

      {/* The rest of your contact page content will go here */}
      {/* For example: Contact form, map, address, and contact details */}
<ContactFormSection/>
<ContactDetailsSection/>
    </>
  );
};

export default ContactPage;
