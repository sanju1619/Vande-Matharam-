// src/components/OurPhilosophySection.jsx
import React from 'react';

const OurPhilosophySection = () => {
  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 font-heading">
            Our Philosophy
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-lg text-gray-600 leading-relaxed">
          <p>
            Inspired by the ideals of Swami Vivekananda, we believe that education is not merely the pursuit of knowledge but a transformative force that shapes character, instills values, and awakens a deep sense of purpose. Through the Gurukulam model, we strive to empower students to discover their Swadharma, realize their highest potential, and emerge as torchbearers of a righteous and progressive society.
          </p>
          <p>
            True education lays the foundation for a strong and enlightened nation, fostering a ‘Nation First’ mindset and nurturing responsible citizens who lead with integrity and serve with unwavering devotion. By integrating experiential learning and real-life opportunities, we inspire young minds to embrace their duties with dedication and excellence, cultivating leaders who uplift society with wisdom, courage, and a commitment to the greater good.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophySection;
