import React from 'react';
import {
  BookOpenIcon,
  HeartIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const panchamukhiData = [
  {
    title: 'Spiritual',
    description:
      'Practices like Agnihotra, Pooja, Bhajans, Shloka chanting, and Surya Vandana instill devotion and inner discipline.',
    color: 'orange-400',
    ring: 'ring-orange-400',
    bg: 'bg-orange-50',
    text: 'text-orange-500',
    icon: <BookOpenIcon className="h-10 w-10" />
  },
  {
    title: 'Creative',
    description:
      'Art, Dance, Drama, and Music serve as tools for self-expression and cultural connection. Children explore their imagination.',
    color: 'yellow-400',
    ring: 'ring-yellow-400',
    bg: 'bg-yellow-50',
    text: 'text-yellow-500',
    icon: <HeartIcon className="h-10 w-10" />
  },
  {
    title: 'Physical',
    description:
      'Practices like Mallakhamba, rope climbing, Silambam, and sports enhance strength and flexibility.',
    color: 'blue-400',
    ring: 'ring-blue-400',
    bg: 'bg-blue-50',
    text: 'text-blue-500',
    icon: <UserIcon className="h-10 w-10" />
  },
  {
    title: 'Intellectual',
    description:
      'Chess, academics, and inquiry-based learning sharpen critical thinking and curiosity.',
    color: 'teal-400',
    ring: 'ring-teal-400',
    bg: 'bg-teal-50',
    text: 'text-teal-500',
    icon: <AcademicCapIcon className="h-10 w-10" />
  },
  {
    title: 'Emotional',
    description:
      'Through Bhajans, Seva, animal care, and nature, children develop compassion, empathy, and gratitude.',
    color: 'green-400',
    ring: 'ring-green-400',
    bg: 'bg-green-50',
    text: 'text-green-500',
    icon: <HandRaisedIcon className="h-10 w-10" />
  },
];

export default function PanchamukhiSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Panchamukhi Shikshana
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            At Vande Mataram Gurukulam, we follow the Panchamukhi model – nurturing every child across five key dimensions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {panchamukhiData.map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.bg} p-8 sm:p-12 text-center rounded-2xl shadow-xl flex flex-col items-center h-full`}
            >
              <div className={`rounded-full ${item.ring} ring-4 w-24 h-24 flex items-center justify-center mb-6 bg-white`}>
                {item.icon}
              </div>
              <h3 className={`text-2xl font-bold ${item.text} mb-4`}>
                {item.title}
              </h3>
              <p className="text-gray-700 text-base leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}