// src/Components/NewsSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import kargil from '../../assets/images/Kargil.jpg';
import kanyakumari from '../../assets/images/kanyakumari.jpg';
import culture from '../../assets/images/culture.jpg';

// --- UPCOMING EVENTS (shown at the top on View All) ---
const upcomingEvents = [
  {
    title: 'Kargil Vijay Divas',
    date: 'July 26, 2025',
    image: kargil,
    description:
      "In the month of July 2025, 26th Kargil Vijay Divas, more than 20+ programs across Karnataka, honoring Soldiers and their families through orations explaining the details of the war, dance dramas portraying their bravery & sacrifice.",
    link: '/news/kargil-vijay-diwas-2025',
  },
  {
    title: 'Reviving Old Frames',
    date: 'August 3, 2025',
    image: culture,
    description:
      "The team collected abandoned frames from roadsides, near temples and lakes. These frames were given a new life by cleaning, painting and installing the art portraits of Freedom Fighters and Soldiers done by our artist volunteers. These frames will be gifted to different schools and colleges where they continue to inspire more.",
    link: '/news/reviving-old-frames-2025',
  },
  {
    title: 'Kanyakumari Yathra',
    date: 'July 2025',
    image: kanyakumari,
    description:
      "Volunteers of Vande Mataram Gurukulam had an opportunity to visit Kanyakumari Rock Memorial and attend a Leadership Development program conducted by Vivekananda Kendra, Kanyakumari.",
    link: '/news/kanyakumari-yathra-2025',
  },
];

// --- LATEST NEWS CARDS (existing) ---
const newsData = [
  {
    image: kargil,
    title: 'Kargil Vijay Diwas Celebrations',
    date: 'July 26, 2024',
    excerpt:
      'Students and staff paid homage to our war heroes with patriotic songs, speeches, and a flag hoisting ceremony.',
    link: '/news/kargil-vijay-diwas',
  },
  {
    image: kanyakumari,
    title: 'Kanyakumari Yatra Completion',
    date: 'August 15, 2024',
    excerpt:
      "Our team successfully completed the national integration yatra, spreading Swami Vivekananda's message across the country.",
    link: '/news/kanyakumari-yatra',
  },
  {
    image: culture,
    title: 'Upcoming: Annual Cultural Fest',
    date: 'September 10, 2024',
    excerpt:
      'Get ready for a vibrant celebration of Indian culture with student performances, music, and art displays.',
    link: '/news/annual-cultural-fest',
  },
];

// Reusable card for news grid
const NewsCard = ({ image, title, date, excerpt, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <Link to={link}>
      <img src={image} alt={title} className="w-full h-56 object-cover" />
    </Link>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{date}</p>
      <p className="mt-3 text-gray-600 leading-relaxed">{excerpt}</p>
      <Link
        to={link}
        className="mt-4 inline-block font-semibold text-yellow-500 hover:text-yellow-600 transition-colors"
      >
        Read More
      </Link>
    </div>
  </div>
);

// Simple stacked item for Upcoming Events
const UpcomingItem = ({ title, date, description, image, link }) => (
  <div className="flex flex-col md:flex-row gap-5 p-5 bg-white/80 backdrop-blur rounded-xl shadow">
    <div className="w-full md:w-1/3">
      <img src={image} alt={title} className="w-full h-44 md:h-36 object-cover rounded-lg" />
    </div>
    <div className="w-full md:w-2/3">
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{date}</p>
      <p className="text-gray-700 mt-3 leading-relaxed">{description}</p>
      <Link
        to={link}
        className="inline-block mt-4 text-yellow-600 font-semibold hover:text-yellow-700"
      >
        View Details →
      </Link>
    </div>
  </div>
);

const NewsPage = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Upcoming Events at top */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl text-center">
            Upcoming Events
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 text-center">
            What’s happening next at Vande Mataram Gurukulam.
          </p>

          <div className="mt-10 space-y-6">
            {upcomingEvents.map((ev, i) => (
              <UpcomingItem key={i} {...ev} />
            ))}
          </div>
        </div>

        {/* Latest News grid below */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Latest News
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Stay updated with our recent events, achievements, and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((newsItem, index) => (
            <NewsCard key={index} {...newsItem} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsPage;
