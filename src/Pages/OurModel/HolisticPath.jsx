// src/components/HolisticPathSection.jsx
import React from 'react';
// You will need to replace this placeholder with the actual path to your image.
import holisticPathImage from '../../assets/images/img1.jpg'; 

const HolisticPathSection = () => {
  return (
    <section className="bg-yellow-400 py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-center ">
          
          {/* Image Column */}
          <div className="flex justify-center md:justify-start" >
            <img 
              src={holisticPathImage} 
              alt="Students engaged in a holistic learning activity" 
              className="w-full max-w-lg h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Text Column - FONT SIZE REDUCED */}
          <div className="text-center md:text-left">
            {/* MODIFIED: Reduced heading font size */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-heading">
              Holistic Path
            </h2>
            {/* MODIFIED: Reduced paragraph font size from text-lg to text-base */}
            <p className="mt-6 text-base text-gray-600 leading-relaxed ">
              At Vande Mataram Gurukulam, academic learning goes hand-in-hand with our value-based education. We follow the NIOS (National Institute of Open Schooling) curriculum, providing students the flexibility to learn at their own pace. Every child is enrolled under the NIOS board and guided to appear for national-level examinations.
            </p>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Beyond the classroom, students are encouraged to pursue certifications, diploma programs, and specialized courses aligned with their swadharma (inner talent, skills and interests) — whether in arts, sports, sciences, or traditional knowledge systems. Additional coaching and mentorship are provided to support their unique learning paths.
            </p>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              The Gurukulam takes complete responsibility for each child’s academic journey until graduation, ensuring they are equipped with knowledge, values, and confidence to thrive in the modern world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HolisticPathSection;
