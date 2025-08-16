// src/Components/VolunteerSection.jsx

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import volunter from '../../assets/images/volunter.jpg'

const volunteerImageUrl = volunter;

const VolunteerSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-yellow-400 py-8 sm:py-15"> 
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Image */}
          <div className="bg-white p-4 rounded-2xl shadow-xl">
            <img 
              src={volunteerImageUrl} 
              alt="Group of happy volunteers"
              className="rounded-xl w-full h-full object-cover lg:h-[450px]" 
            />
          </div>

          {/* Right Column */}
          <div className="text-white space-y-6">
            {/* Our Vision */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
              <p className="mt-2 text-lg sm:text-xl">Education for Social Transformation</p>
            </div>

            {/* Support a Cause */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Support a Cause</h2>
              <p className="mt-2 text-lg sm:text-xl">
                Your contribution helps provide quality education and upbringing
              </p>
            </div>

            {/* Volunteer With Us */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Volunteer With Us</h2>
              <p className="mt-2 text-lg sm:text-xl">
                Join the cause —{' '}
                {inView ? <CountUp start={0} end={10000} duration={3} separator="," /> : '0'}+ Volunteers
              </p>
            </div>

            {/* Volunteer Form */}
            <form action="#" method="POST" className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b-2 border-white/50 placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b-2 border-white/50 placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors py-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="3"
                  placeholder="Write your message"
                  className="w-full bg-transparent border-b-2 border-white/50 placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors py-2"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit"
                  className="inline-block bg-white text-yellow-500 font-bold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
