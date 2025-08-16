import React, { useState } from 'react';
import vidyavarna from '../../assets/photos/vidhyavarana.png';
import vidyavarna1 from '../../assets/photos/vidhyavarana1.png';
import vidyavarna2 from '../../assets/photos/vidhyavarana2.jpg';
import vidyavarna3 from '../../assets/photos/vidhyavarana3.jpg';
import vidyavarna5 from '../../assets/photos/vidhyavarana5.jpg';
import vidyavarna6 from '../../assets/photos/vidhyavarana6.jpg';
import heroImage from '../../assets/images/img_2.jpg';

// Gurukulam Gallery Images (with date added)
const gurukulamImages = [
  { url: 'https://images.unsplash.com/photo-1505664194779-8be22b7b3952?q=80&w=2070', date: '2024-07-10' },
  { url: 'https://images.unsplash.com/photo-1542810634-71277d952594?q=80&w=2070', date: '2024-06-15' },
  { url: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964', date: '2024-08-05' },
  { url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070', date: '2024-05-25' },
  { url: 'https://images.unsplash.com/photo-1528194427355-b772a01095b3?q=80&w=2070', date: '2024-09-01' },
  { url: 'https://images.unsplash.com/photo-1605807642769-906d649339a9?q=80&w=2070', date: '2024-07-22' },
];

// Adrishya Gallery Images (no sort needed)
const adrishyaImages = [
  vidyavarna,
  vidyavarna1,
  vidyavarna3,
  vidyavarna5,
  vidyavarna2,
  vidyavarna6,
];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('gurukula');
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");

  const openImage = (imageUrl) => setSelectedImage(imageUrl);
  const closeImage = () => setSelectedImage(null);

  // If Gurukula → apply sort by date
  const activeImages =
    activeTab === 'gurukula'
      ? [...gurukulamImages].sort((a, b) =>
          sortOrder === "newest"
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date)
        )
      : adrishyaImages;

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Our Gallery
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            A glimpse into our world of learning, service, and growth.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-16">
            <div className="flex p-1 bg-gray-200 rounded-full">
              <button
                onClick={() => setActiveTab('gurukula')}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === 'gurukula'
                    ? 'bg-white text-gray-800 shadow'
                    : 'bg-transparent text-gray-500'
                }`}
              >
                Gurukula
              </button>
              <button
                onClick={() => setActiveTab('adrishya')}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === 'adrishya'
                    ? 'bg-white text-gray-800 shadow'
                    : 'bg-transparent text-gray-500'
                }`}
              >
                Adrishya
              </button>
            </div>
          </div>

          {/* Sort Dropdown (only for Gurukula) */}
          {activeTab === "gurukula" && (
            <div className="flex justify-end mb-8">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400"
              >
                <option value="newest">Sort by: Newest First</option>
                <option value="oldest">Sort by: Oldest First</option>
              </select>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeImages.map((image, index) => {
              const imageUrl = activeTab === 'gurukula' ? image.url : image;
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  onClick={() => openImage(imageUrl)}
                >
                  <img
                    src={imageUrl}
                    alt={`${activeTab} gallery image ${index + 1}`}
                    className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
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
          <div className="relative max-w-7xl p-6">
            <img
              src={selectedImage}
              alt="Full screen view"
              className="w-full h-auto max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;