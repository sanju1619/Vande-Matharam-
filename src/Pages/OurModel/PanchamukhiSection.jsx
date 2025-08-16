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

// Utility to get positions and offsets
function getCirclePosition(idx, total, radius, center, cardRadius) {
  const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
  const x = center + radius * Math.cos(angle);
  const y = center + radius * Math.sin(angle);
  const armStartX = center + (radius - cardRadius) * Math.cos(angle);
  const armStartY = center + (radius - cardRadius) * Math.sin(angle);
  return { x, y, angle, armStartX, armStartY };
}

export default function PanchamukhiSection() {
  const center = 250;
  const radius = 140;
  const cardRadius = 48;

  return (
    <section className="bg-gray-50 py-20 font-sans">
      <div className="flex justify-center">
        <div className="relative w-[500px] h-[500px]">
          {/* Central Circle */}
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-2 border-gray-200 z-20 text-center px-4">
            <span className="font-bold text-xl mb-2">Panchamukhi<br />Shikshana</span>
           
          </div>

          {/* Arms & Circles */}
          {panchamukhiData.map((item, idx) => {
            const total = panchamukhiData.length;
            const { x, y, angle, armStartX, armStartY } = getCirclePosition(idx, total, radius, center, cardRadius);

            let descPosition = {};
            let descAlign = "text-center";
            const horizontalPadding = 24; // adds space from icon circle horizontally
            const verticalPadding = 24; // adds space from icon circle vertically

            // Fix for Spiritual and Intellectual: always left bottom, with some clear space
            if (item.title === "Spiritual") {
              descPosition = { left: x - 80, top: -50}; 
              descAlign = "text-left";
            } else if (item.title === "Intellectual") {
              descPosition = { left: x - 180, top: y +90 };
              descAlign = "text-left";
            } else if (item.title === "Physical") {
              descPosition = { left: x + cardRadius + horizontalPadding, top: y +90 };
              descAlign = "text-center";
            } else if (item.title === "Creative") {
              descPosition = { left: x + cardRadius + horizontalPadding, top: y - cardRadius - verticalPadding };
              descAlign = "text-left";
            } else if (item.title === "Emotional") {
              descPosition = { left: -120 , top: y -50 };
              descAlign = "text-left";
            }

            const titleTop = item.title === "Spiritual";
            const colorHex = {
              "orange-400": "#fb923c",
              "yellow-400": "#facc15",
              "blue-400": "#60a5fa",
              "teal-400": "#14b8a6",
              "green-400": "#34d399"
            }[item.color];

            return (
              <React.Fragment key={idx}>
                <div
                  className="absolute z-10"
                  style={{
                    left: center,
                    top: center,
                    width: Math.sqrt((armStartX - center) ** 2 + (armStartY - center) ** 2),
                    height: '4px',
                    transform: `rotate(${(angle * 180) / Math.PI}deg)`,
                    background: colorHex,
                    transformOrigin: "left center"
                  }}
                />
                {/* Icon circle */}
                <div
                  className={`absolute flex flex-col items-center`}
                  style={{
                    left: x - cardRadius,
                    top: y - cardRadius,
                    width: cardRadius * 2
                  }}
                >
                  {titleTop && (
                    <div className={`font-bold ${item.text} text-base mb-1 text-center`}>
                      {item.title}
                    </div>
                  )}
                  <div className={`rounded-full ${item.bg} shadow-xl ${item.ring} ring-4 w-24 h-24 flex items-center justify-center border-2 border-white`}>
                    {item.icon}
                  </div>
                  {!titleTop && (
                    <div className={`font-bold ${item.text} text-base mt-1 text-center`}>
                      {item.title}
                    </div>
                  )}
                </div>
                {/* Description outside card */}
                <div
                  className={`absolute text-xs ${item.text} ${descAlign} bg-white px-3 py-2 rounded-lg shadow`}
                  style={{
                    width: '165px',
                    left: descPosition.left,
                    top: descPosition.top,
                    zIndex: 30
                  }}
                >
                  {item.description}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
