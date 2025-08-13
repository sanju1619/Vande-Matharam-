

import React from 'react';
import { Link } from 'react-router-dom';
import story from '../../assets/images/story.jpg'
// You can replace this with the actual image of the child
const storyImageUrl = story;

const StorySection = () => {
  return (
    // UPDATED: Reduced vertical padding (py-12 and sm:py-16) to make the section shorter
    <section className="bg-yellow-500/80 py-7 sm:py-10">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="bg-yellow-500/80 rounded-2xl shadow-2xl overflow-hidden">
          {/* UPDATED: Added 'items-center' to ensure columns align vertically */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Left Column: Image */}
            <div className="relative h-64 lg:h-96">
              <img
                src={storyImageUrl}
                alt="A child from the Gurukulam smiling and playing with water"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl ml-2 mt-3 "
              />
            </div>

            {/* Right Column: Text Content */}
            {/* UPDATED: Reduced padding (p-8 and sm:p-12) for a more compact feel */}
            <div className="p-8 sm:p-12 text-white">
              <p className="text-sm font-semibold tracking-wider uppercase text-white/80">
                Glimpses of Transformation
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight">
                From Village to Visionary: A Gurukulam Journey
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Raju, once a quiet boy from a remote village, discovered his voice and purpose through the Gurukulam's blend of tradition and self-reliance. Today, he mentors younger children and aspires to become a teacher himself.
              </p>
              <p className="mt-5 font-semibold text-white">
                Over 150 such stories and counting
              </p>
              <div className="mt-6">
                <Link
                  to="/stories"
                  className="inline-block bg-gray-900 text-white font-bold py-3 px-6 rounded-md hover:bg-black transition-colors duration-300"
                >
                  READ THE FULL STORY
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
