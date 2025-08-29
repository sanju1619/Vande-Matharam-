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

  // ✅ Only 2 volunteers (from your table)
  const volunteerExperiences = [
    {
      name: "Manju C",
      city: "Hubballi",
      years: "3 years",
      experience:
        "Participating in the Vidyavarna project was a life-changing experience. Seeing schools transform through art that carries meaningful messages showed me the power of creative service."
    },
    {
      name: "Pavan G",
      city: "Vijayapur",
      years: "2 years",
      experience:
        "By involving myself in volunteering activities with Vandematram Gurukulam, I not only give service but also receive spiritual and cultural growth, while developing interest in subjects like Math and learning through discipline and values."
    }
  ];

  return (
    <div>
      {/* Features Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              What Makes Our Gurukula Unique
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">&#9679;</span>
                <p className="text-lg text-gray-700 leading-8">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials Section */}
      <section className="bg-yellow-400 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Volunteer Experiences
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-8">
              Hear from those who've been part of our journey
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {volunteerExperiences.map((volunteer, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-700 italic leading-8">
                  "{volunteer.experience}"
                </p>
                <div className="mt-6 text-right">
                  <p className="font-semibold text-gray-900">— {volunteer.name}</p>
                  <p className="text-sm text-gray-500">
                    {volunteer.city}, Volunteer {volunteer.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniqueFeaturesSection;
