// src/components/UniqueFeaturesSection.jsx
import React from 'react';

const UniqueFeaturesSection = () => {
  const uniqueFeatures = [
    'Value-based curriculum rooted in Indian tradition',
    'Organic farming, cooking, self-reliance skills',
    'Emphasis on Samskrutham and Indian knowledge systems',
    'Theatre, storytelling, and expressive arts',
    'Daily yoga, pranayama, and Dhyana practices',
    'Emphasis on spiritual ecology and sustainable living',
    'Career guidance rooted in dharmic self-discovery',
    'Close mentor-student relationships',
    'Blending Gurukula wisdom with modern academia',
  ];

  return (
    <div>
    <section className="bg-gray-50 py-20 font-sans">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 font-heading">
            What Makes Our Gurukula Unique
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-7xl mx-auto mb-25">
          {uniqueFeatures.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">&#9679;</span>
              <p className="text-lg text-gray-900">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* New Paragraph about Volunteers */}
        {/* <div className="text-center max-w-4xl mx-auto mt-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            What truly sets us apart is our community. Volunteers are an integral part of the Gurukulam, dedicating their time and expertise to help teach and mentor the children, creating a vibrant and supportive learning environment for everyone.
          </p>
        </div> */}
{/* this is volunteer testimonial */}
</div>
    </section>
<section class=" bg-yellow-400 py-16 w-full">
  <div class="container mx-auto px-4 ">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-extrabold text-gray-800">Volunteer Experiences</h2>
      <p class="mt-2 text-lg text-gray-600">Hear from those who've been part of our journey</p>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      
      <div class="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
        <p class="text-gray-700 italic">"Teaching at the Gurukulam transformed my perspective on education. The children's dedication to both academics and traditional values is truly inspiring."</p>
        <div class="mt-4 text-right">
          <p class="font-semibold text-gray-900">— Rajesh K.</p>
          <p class="text-sm text-gray-500">Volunteer Teacher, 2 years</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
        <p class="text-gray-700 italic">"Participating in the Vidyavarna project was a life-changing experience. Seeing schools transform through art that carries meaningful messages showed me the power of creative service."</p>
        <div class="mt-4 text-right">
          <p class="font-semibold text-gray-900">— Priya M.</p>
          <p class="text-sm text-gray-500">Art Volunteer, Adrishya</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
        <p class="text-gray-700 italic">"The Kanyakumari Yatra organized by Adrishya wasn't just a journey across India, but a journey within. The discipline, patriotism, and camaraderie we developed will stay with me forever."</p>
        <div class="mt-4 text-right">
          <p class="font-semibold text-gray-900">— Arjun S.</p>
          <p class="text-sm text-gray-500">Youth Volunteer</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 sm:col-span-2 lg:col-span-1">
        <p class="text-gray-700 italic">"Working with children at the Gurukulam taught me more than I taught them. Their curiosity, resilience, and joy in simple living are lessons I carry into my professional life."</p>
        <div class="mt-4 text-right">
          <p class="font-semibold text-gray-900">— Meera N.</p>
          <p class="text-sm text-gray-500">Corporate Volunteer</p>
        </div>
      </div>

    </div>
  </div>
</section>


     
    </div>
  );
};

export default UniqueFeaturesSection;
