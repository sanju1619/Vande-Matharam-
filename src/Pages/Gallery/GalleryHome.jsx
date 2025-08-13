// src/pages/GalleryHome.jsx
import React, { useState } from 'react';

// --- IMAGE PLACEHOLDERS ---
// You must replace these with your actual image paths.
import heroImage from '../../assets/images/img_2.jpg';

// Gurukulam Gallery Images (6 images to match the 2x3 grid)
const gurukulamImages = [
  'https://images.unsplash.com/photo-1505664194779-8be22b7b3952?q=80&w=2070',
  'https://images.unsplash.com/photo-1542810634-71277d952594?q=80&w=2070',
  'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070',
  'https://images.unsplash.com/photo-1528194427355-b772a01095b3?q=80&w=2070',
  'https://images.unsplash.com/photo-1605807642769-906d649339a9?q=80&w=2070',
];

// Adrishya Gallery Images (6 images to match the 2x3 grid)
const adrishyaImages = [
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070',
  'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1887',
  'https://images.unsplash.com/photo-1594708422143-7e53f5c355c7?q=80&w=2070',
  'https://images.unsplash.com/photo-1611095965943-9b5835c61303?q=80&w=2070',
];

const GalleryPage = () => {
  // State for the gallery toggle
  const [activeTab, setActiveTab] = useState('gurukula');
  // State to manage the selected image for the popup modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Handlers to open and close the image modal
  const openImage = (imageUrl) => setSelectedImage(imageUrl);
  const closeImage = () => setSelectedImage(null);

  const activeImages = activeTab === 'gurukula' ? gurukulamImages : adrishyaImages;

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative z-10 max-w-4xl mx-auto px-4 mt-32">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl font-heading">Our Gallery</h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-2xl md:mt-5 md:max-w-3xl font-sans">
            A glimpse into our world of learning, service, and growth.
          </p>
        </main>
      </div>

      {/* Toggleable Image Gallery Section */}
      <section className="bg-gray-50 py-20 font-sans">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="flex p-1 bg-gray-200 rounded-full">
              <button onClick={() => setActiveTab('gurukula')} className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${activeTab === 'gurukula' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'}`}>Gurukula</button>
              <button onClick={() => setActiveTab('adrishya')} className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${activeTab === 'adrishya' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'}`}>Adrishya</button>
            </div>
          </div>
          
          {/* MODIFIED: Updated to 3 columns on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeImages.map((imageSrc, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                onClick={() => openImage(imageSrc)}
              >
                <img 
                  src={imageSrc} 
                  alt={`${activeTab} gallery image ${index + 1}`} 
                  className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                {/* NEW: Hover overlay with icon */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Image Popup Modal (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white text-4xl font-bold"
            aria-label="Close image viewer"
          >
            &times;
          </button>
          <div className="relative max-w-4xl max-h-screen p-4">
            <img 
              src={selectedImage} 
              alt="Full screen view" 
              className="w-full h-auto max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking the image
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
