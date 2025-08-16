// src/Pages/Home.jsx
import img1 from '../../assets/images/img1.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivitiesSection from './Activities';
import AboutSection from './AboutSection'
import PillarsSection from './PillerSection';
import StorySection from './StorySection';
import NewsSection from './NewsSection';
import VolunteerSection from './VolunterSection';
// You can replace this URL with your own image
const heroImageURL = img1;
const youtubeVideoID = '_0yLQ4H0W1g'; // Extracted from your YouTube link

const HomePage = () => {
  // State to manage whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Main Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center  "
        style={{ backgroundImage: `url(${heroImageURL})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-50">
          <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block My Custom Font">  A free residential gurukulam nurturing holistic growth through value-based education </span>
              {/* <span>Ready For Tomorrow.</span> */}
          </h1>
          {/* <p className="mt-3 mb-20 max-w-md mx-auto text-lg text-white sm:text-2xl md:mt-5 md:max-w-3xl"> */}
        
          {/* </p> */}
          <div className="mt-14 max-w-md mx-auto sm:flex sm:justify-center items-center">
            {/* The play button is now a button that opens the modal */}
            <div className="mt-3 sm:mt-0">
              <button
                onClick={openModal}
                className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full border-2 border-white/50 hover:bg-white/30 transition-all duration-300 group"
                aria-label="Watch live demo"
              >
                <svg
                  className="w-8 h-8 text-white transform transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
              </button>
              
        
            </div>
          </div>
        </main>
      </div>
<AboutSection/>


  <ActivitiesSection />

  <PillarsSection/>
  <StorySection/>
  <NewsSection/>
  <VolunteerSection/>

 
    
      {/* Video Modal - Renders only when isModalOpen is true */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking the backdrop
        >
          <div 
            className="relative w-full max-w-3xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the video from closing the modal
          >
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full text-lg font-bold flex items-center justify-center z-50"
              aria-label="Close video player"
            >
              &times;
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoID}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
       
        </div>
        
      )}
    </>
  );
};

export default HomePage;
