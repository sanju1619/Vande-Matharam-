// src/Components/AboutSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  // This hook tells us when the component is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only run once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  return (
    <section ref={ref} className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          {/* Left Column (Yellow Box) - Restyled and Aligned */}
          <div className="bg-yellow-400 p-8 sm:p-12 text-center text-gray-900 rounded-2xl shadow-xl flex flex-col items-center justify-center h-full">
            <p className="text-xl font-medium">Empowered Over</p>
            <div className="text-6xl sm:text-7xl font-bold my-2 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)' }}>
              {/* The CountUp component now has a + sign */}
              {inView ? <CountUp start={0} end={150000} duration={3} separator="," /> : '0'}<span className="text-5xl">+</span>
            </div>
            {/* FIXED: Removed hard-coded line breaks for proper alignment */}
            <p className="text-lg sm:text-xl mt-2 max-w-xs mx-auto">
              Students reached through Workshops, Sessions & Cultural Programs
            </p>
            {/* RESTYLED: Button is now rounded */}
            <Link 
              to="/activities" 
              className="mt-8 inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              How we started
            </Link>
          </div>

          {/* Right Column (Text Content) - Restyled */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Who Are We?
            </h2>
            {/* FIXED: Removed hard-coded line breaks to allow natural text flow */}
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Vande Mataram Gurukulam is a free residential learning space rooted in the ideals of Swami Vivekananda. Run by a team of dedicated youth, we offer holistic, value-based education that nurtures the body, mind, and spirit.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-8">
              Alongside academic learning in English, we emphasize Samskrutha, regional language, Bharatiya values, and practical life skills. Our focus is to help each child discover their Swadharma (inner talent) and grow into disciplined, compassionate, and patriotic citizens.
            </p>
            <p class="mb-4"><em>Adrishya volunteers' next step was this Gurukulam initiative for children from economically weaker sections.</em></p>
            {/* RESTYLED: Button matches the other one for consistency */}
            <Link 
              to="/about"
              className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
