// src/components/AdrishyaSection.jsx
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// --- IMAGE & LOGO PLACEHOLDERS ---
import adrishyaLogo from '../../assets/images/img1.jpg';
import adrishya1 from '../../assets/images/adrishiya1.jpg';
import journeyImage from '../../assets/images/img1.jpg';
import vidyavarnaImage from '../../assets/images/img1.jpg';
import culturalImage from '../../assets/images/img1.jpg';
import workshopImage from '../../assets/images/img1.jpg';
import environmentImage from '../../assets/images/img1.jpg';
import socialImage from '../../assets/images/img1.jpg';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } }
  ]
};

const sliderVolunteerSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } }
  ]
};

const galleryPhotos = [
  adrishya1,
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
  'https://images.unsplash.com/photo-1542810634-71277d952594?q=80&w=2070',
  'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070',
];

const volunteerPhotos = [
  'https://images.unsplash.com/photo-1578496469375-77a8d56a29b3?q=80&w=2070',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
  'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1887',
];

const AdrishyaSection = () => {
  const activitiesData = [
    { title: 'Vidyavarna Painting', description: 'Transformed 75+ government schools and ashramas with vibrant, educational, and value-based wall art that inspires learning and patriotism.', image: adrishya1 },
    { title: 'Cultural Activities', description: 'Conducted 150+ cultural programs across Karnataka like Vande Bharata Mataram, Viveka Bharatha, and Kargil Vijay Diwas to instill national pride.', image: culturalImage },
    { title: 'Workshops & Sessions', description: '500+ sessions on values, leadership, and culture to awaken young minds and build confident, conscious citizens.', image: workshopImage },
    { title: 'Environment', description: 'Initiatives like seed ball drives, goshala and lake cleaning, and bird water stations to nurture eco-consciousness.', image: environmentImage },
    { title: 'Social Awareness', description: 'Organized impactful drives like Vastra Daan, eco-brick making, and patriotic frame crafting using recycled materials.', image: socialImage },
  ];

  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* 1. Our Moments Section */}
      <div className="mb-16 sm:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Moments
        </h2>
        <Slider {...sliderSettings}>
          {galleryPhotos.map((photo, index) => (
            <div key={index} className="px-2">
              <img
                src={photo}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* 2. Our Journey Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 sm:mb-20">
        <div className="flex justify-center order-2 md:order-1">
          <img 
            src={journeyImage} 
            alt="Adrishya Journey" 
            className="rounded-xl shadow-lg w-full max-w-md object-cover h-72 sm:h-80 md:h-96"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Adrishya was born from a simple yet powerful idea: to channel the vibrant energy of youth towards nation-building. What began as a small group of friends passionate about seva (selfless service) has grown into a dynamic movement of volunteers dedicated to preserving and promoting India's cultural and spiritual heritage. Through our diverse initiatives, we aim to awaken social consciousness, foster environmental responsibility, and instill a sense of national pride in the next generation.
          </p>
        </div>
      </div>

      {/* 3. Activities Grid */}
      <div className="mb-16 sm:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activitiesData.map((activity, index) => (
            <div 
              key={index} 
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => setSelectedActivity(activity)}
            >
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-3xl w-full rounded-xl shadow-xl overflow-hidden">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              onClick={() => setSelectedActivity(null)}
            >
              &times;
            </button>
            <img 
              src={selectedActivity.image} 
              alt={selectedActivity.title} 
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{selectedActivity.title}</h2>
              <p className="text-gray-700">{selectedActivity.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. Volunteer Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-16 sm:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Join as a Volunteer
        </h2>
        <div className="mb-10">
          <Slider {...sliderVolunteerSettings}>
            {volunteerPhotos.map((photo, index) => (
              <div key={index} className="px-3">
                <img
                  src={photo}
                  alt={`Volunteer group ${index + 1}`}
                  className="w-full h-64 sm:h-72 object-cover rounded-xl shadow-md"
                />
              </div>
            ))}
          </Slider>
        </div>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            />
          </div>
          <textarea 
            placeholder="Write your message..." 
            rows="4" 
            className="w-full p-3.5 border border-gray-300 rounded-lg mb-5 focus:ring-2 focus:ring-orange-300 focus:border-transparent"
          ></textarea>
          <textarea 
            placeholder="How you want to contribute?" 
            rows="3" 
            className="w-full p-3.5 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-orange-300 focus:border-transparent"
          ></textarea>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-10 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
            <p className="text-sm text-gray-500 mt-5">
              After submission, you will receive a WhatsApp message from our bot with a Google Form link for the final steps.
            </p>
          </div>
        </form>
      </div>

      {/* 5. Contact Section */}
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Connect with Adrishya
        </h3>
        <p className="text-gray-600 mb-3">
          Email: <a href="mailto:contact@adrishya.org" className="text-indigo-600 hover:underline">contact@adrishya.org</a>
        </p>
        <p className="text-gray-600 mb-8">
          Phone: <a href="tel:+911234567890" className="text-indigo-600 hover:underline">+91 123 456 7890</a>
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-indigo-600 text-xl transition">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-600 text-xl transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-600 text-xl transition">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdrishyaSection;