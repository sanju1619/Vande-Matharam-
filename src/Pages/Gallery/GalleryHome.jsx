// src/Pages/GalleryPage.jsx
import React, { useState } from 'react';
import heroImage from '../../assets/images/img_2.jpg';

// -------------------- Gurukula (kept from NEW) --------------------
const gurukulamImages = [
  { url: 'https://images.unsplash.com/photo-1542810634-71277d952594?q=80&w=2070', date: '2024-07-10' },
  { url: 'https://images.unsplash.com/photo-1542810634-71277d952594?q=80&w=2070', date: '2024-06-15' },
  { url: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964', date: '2024-08-05' },
  { url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070', date: '2024-05-25' },
  { url: 'https://images.unsplash.com/photo-1528194427355-b772a01095b3?q=80&w=2070', date: '2024-09-01' },
  { url: 'https://images.unsplash.com/photo-1605807642769-906d649339a9?q=80&w=2070', date: '2024-07-22' },
];

// -------------------- Adrishya (taken from OLD) --------------------
// NOTE: Files live in /public/Gallery photos/Adrishya/...
const ADRISHYA_IMAGES = [
  '/Gallery%20photos/Adrishya/Camp%20for%20VVN%20Degree%20College%20Students%20%F0%9F%99%8F.webp.jpg',
  '/Gallery%20photos/Adrishya/Copy%20of%20DSC03085.JPG',
  '/Gallery%20photos/Adrishya/g1.jpg',
  '/Gallery%20photos/Adrishya/Hostel%20memories,%20Hirebendigere%F0%9F%99%8F.webp%20(1).jpg',

  // Ensure these exist as real JPGs (converted from CR2)
  '/Gallery%20photos/Adrishya/IMG_0174.jpg',
  '/Gallery%20photos/Adrishya/IMG_0368.jpg',
  '/Gallery%20photos/Adrishya/IMG_0381%20(1).jpg',
  '/Gallery%20photos/Adrishya/IMG_0381%20(1)(1).jpg',

  '/Gallery%20photos/Adrishya/IMG_5525.jpg',
  '/Gallery%20photos/Adrishya/IMG_8562.jpg',
  '/Gallery%20photos/Adrishya/IMG_8580.jpg',
  '/Gallery%20photos/Adrishya/IMG_8702.jpg',
  '/Gallery%20photos/Adrishya/IMG_8730.jpg',
  '/Gallery%20photos/Adrishya/IMG_8733.jpg',
  '/Gallery%20photos/Adrishya/IMG_8757.jpg',
  '/Gallery%20photos/Adrishya/IMG_8769.jpg',
  '/Gallery%20photos/Adrishya/IMG_8774.jpg',
  '/Gallery%20photos/Adrishya/IMG_8789.jpg',
  '/Gallery%20photos/Adrishya/IMG_8808.jpg',
  '/Gallery%20photos/Adrishya/IMG_8816.jpg',
  '/Gallery%20photos/Adrishya/IMG_8817.jpg',

  '/Gallery%20photos/Adrishya/IMG-20250801-WA0066.jpg',
  '/Gallery%20photos/Adrishya/IMG-20250801-WA0074.jpg',
  '/Gallery%20photos/Adrishya/IMG-20250805-WA0004.jpg',

  '/Gallery%20photos/Adrishya/Jain%20Engineering%20college,%20%20Belagavi..webp.jpg',
  '/Gallery%20photos/Adrishya/Ramakrishna%20Mission%20ashrama,%20belagavi..webp%20(2).jpg',
];

const PREVIEW_COUNT = 6; // 5 images + 1 "+N more" tile (old behavior)

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('gurukula');
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortOrder, setSortOrder] = useState('newest');

  // --- Adrishya collapse/expand (old behavior preserved) ---
  const [adrishyaShowAll, setAdrishyaShowAll] = useState(false);

  const totalAdrishya = ADRISHYA_IMAGES.length;
  const hasMoreAdrishya = totalAdrishya > PREVIEW_COUNT;
  const previewAdrishya = hasMoreAdrishya
    ? ADRISHYA_IMAGES.slice(0, PREVIEW_COUNT - 1)
    : ADRISHYA_IMAGES.slice(0, PREVIEW_COUNT);
  const adrishyaVisible = adrishyaShowAll ? ADRISHYA_IMAGES : previewAdrishya;
  const adrishyaRemaining = hasMoreAdrishya ? totalAdrishya - (PREVIEW_COUNT - 1) : 0;

  // --- Sort Gurukula ---
  const renderedGurukulaImages = [...gurukulamImages].sort((a, b) =>
    sortOrder === 'newest'
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
  );

  // --- Modal ---
  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Our Gallery</h1>
          <p className="mt-6 text-lg sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            A glimpse into our world of learning, service, and growth.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex p-1 bg-gray-200 rounded-full">
              <button
                onClick={() => {
                  setActiveTab('gurukula');
                  setAdrishyaShowAll(false);
                }}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === 'gurukula' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'
                }`}
              >
                Gurukula
              </button>
              <button
                onClick={() => setActiveTab('adrishya')}
                className={`px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === 'adrishya' ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'
                }`}
              >
                Adrishya
              </button>
            </div>
          </div>

          {/* Sort (only for Gurukula) */}
          {activeTab === 'gurukula' && (
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

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gurukula Tab */}
            {activeTab === 'gurukula' &&
              renderedGurukulaImages.map((image, index) => (
                <button
                  key={`g-${index}`}
                  type="button"
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  onClick={() => openImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={`gurukula gallery image ${index + 1}`}
                    className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </button>
              ))}

            {/* Adrishya Tab (old preview + "+N more" + collapse) */}
            {activeTab === 'adrishya' &&
              adrishyaVisible.map((src, idx) => (
                <button
                  key={`a-${idx}`}
                  type="button"
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  onClick={() => openImage(src)}
                >
                  <img
                    src={src}
                    alt={`adrishya gallery image ${idx + 1}`}
                    className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </button>
              ))}

            {/* "+N more" tile as the 6th card (preview mode only) */}
            {activeTab === 'adrishya' && !adrishyaShowAll && hasMoreAdrishya && (
              <button
                type="button"
                onClick={() => setAdrishyaShowAll(true)}
                className="relative overflow-hidden rounded-2xl shadow-lg group bg-white border border-dashed border-gray-300 flex items-center justify-center"
                style={{ minHeight: '20rem' }}
                aria-label={`Show ${adrishyaRemaining} more images`}
              >
                <span className="text-2xl font-bold text-gray-700">+{adrishyaRemaining} more</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Floating Collapse button (only when Adrishya expanded) */}
      {activeTab === 'adrishya' && adrishyaShowAll && (
        <button
          type="button"
          onClick={() => setAdrishyaShowAll(false)}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-black transition"
          aria-label="Collapse Adrishya gallery"
        >
          Collapse
        </button>
      )}

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={closeImage}>
          <button onClick={closeImage} className="absolute top-4 right-4 text-white text-4xl font-bold" aria-label="Close image viewer">
            &times;
          </button>
          <div className="relative max-w-7xl p-6">
            <img src={selectedImage} alt="Full screen view" className="w-full h-auto max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
