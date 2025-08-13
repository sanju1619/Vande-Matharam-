// src/components/AdrishyaSection.jsx
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// --- IMAGE & LOGO PLACEHOLDERS ---
// You must replace these with the actual paths to your images.
import adrishyaLogo from '../../assets/images/img1.jpg';

import journeyImage from '../../assets/images/img1.jpg';
import vidyavarnaImage from '../../assets/images/img1.jpg';
import culturalImage from '../../assets/images/img1.jpg';
import workshopImage from '../../assets/images/img1.jpg';
import environmentImage from '../../assets/images/img1.jpg';
import socialImage from '../../assets/images/img1.jpg';

// --- PLACEHOLDER PHOTOS FOR SCROLLERS ---
// Replace these with arrays of your actual photo paths.
import Slider from "react-slick";

// Settings for the carousel
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
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 }
    }
  ]
};

const galleryPhotos = [
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070',
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
    { title: 'Vidyavarna Painting', description: 'Transformed 75+ government schools and ashramas with vibrant, educational, and value-based wall art that inspires learning and patriotism.', image: vidyavarnaImage },
    { title: 'Cultural Activities', description: 'Conducted 150+ cultural programs across Karnataka like Vande Bharata Mataram, Viveka Bharatha, and Kargil Vijay Diwas to instill national pride.', image: culturalImage },
    { title: 'Workshops & Sessions', description: '500+ sessions on values, leadership, and culture to awaken young minds and build confident, conscious citizens.', image: workshopImage },
    { title: 'Environment', description: 'Initiatives like seed ball drives, goshala and lake cleaning, and bird water stations to nurture eco-consciousness.', image: environmentImage },
    { title: 'Social Awareness', description: 'Organized impactful drives like Vastra Daan, eco-brick making, and patriotic frame crafting using recycled materials.', image: socialImage },
  ];

  return (
    <div className="font-sans">
      {/* 1. Photo Scroller */}
      {/* 1. Our Moments Section (Auto-Sliding Carousel) */}
<div className="mb-20 px-6 lg:px-8">
  <h2 className="text-3xl font-bold text-gray-800 font-heading text-center mb-8">
    Our Moments
  </h2>
  <Slider {...sliderSettings}>
    {galleryPhotos.map((photo, index) => (
      <div key={index} className="px-2">
        <img
          src={photo}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-56 object-cover rounded-lg shadow-md"
        />
      </div>
    ))}
  </Slider>
</div>


      {/* 2. Our Journey Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="flex justify-center ">
          <img src={adrishyaLogo} alt="Adrishya Logo" className="max-w-md w-full md:w-[400px] lg:w-[460px] xl:w-[500px]" />

        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 font-heading mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Adrishya was born from a simple yet powerful idea: to channel the vibrant energy of youth towards nation-building. What began as a small group of friends passionate about seva (selfless service) has grown into a dynamic movement of volunteers dedicated to preserving and promoting India's cultural and spiritual heritage. Through our diverse initiatives, we aim to awaken social consciousness, foster environmental responsibility, and instill a sense of national pride in the next generation.
          </p>
        </div>
      </div>

      {/* 3. Activities Grid */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-800 font-heading text-center mb-8">Our Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activitiesData.map((activity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover rounded-md mb-4"/>
                    <h3 className="text-xl font-bold text-gray-800 font-heading mb-2">{activity.title}</h3>
                    <p className="text-base text-gray-600">{activity.description}</p>
                </div>
            ))}
        </div>
      </div>

      {/* 4. Volunteer Section */}
      <div className="bg-white p-10 rounded-lg shadow-lg mb-20">
        <h2 className="text-3xl font-bold text-gray-800 font-heading text-center mb-8">Join as a Volunteer</h2>
        <div className="flex overflow-x-auto-hidden  space-x-4 p-4 -m-4 mb-8">
          {volunteerPhotos.map((photo, index) => (
            <img key={index} src={photo} alt={`Volunteer group ${index + 1}`} className="flex-shrink-0 w-96 h-64 rounded-lg shadow-md object-cover"/>
          ))}
        </div>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md"/>
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md"/>
          </div>
          <textarea placeholder="Write your message..." rows="4" className="w-full p-3 border border-gray-300 rounded-md mb-4"></textarea>
          <textarea placeholder="How you want to contribute?" rows="3" className="w-full p-3 border border-gray-300 rounded-md mb-4"></textarea>
          <div className="text-center">
            <button type="submit" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">Submit</button>
            <p className="text-sm text-gray-500 mt-4">After submission, you will receive a WhatsApp message from our bot with a Google Form link for the final steps.</p>
          </div>
        </form>
      </div>

      {/* 5. Contact and Social Media */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 font-heading mb-4">Connect with Adrishya</h3>
        <p className="text-gray-600 mb-2">Email: <a href="mailto:contact@adrishya.org" className="text-indigo-600">contact@adrishya.org</a></p>
        <p className="text-gray-600 mb-6">Phone: <a href="tel:+911234567890" className="text-indigo-600">+91 123 456 7890</a></p>
        <div className="flex justify-center space-x-6">
          {/* Replace # with your actual social media links */}
          <a href="#" className="text-gray-500 hover:text-indigo-600">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-indigo-600">YouTube</a>
        </div>
      </div>
    </div>
  );
};

export default AdrishyaSection;
