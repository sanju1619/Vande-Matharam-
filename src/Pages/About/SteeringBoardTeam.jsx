// src/components/SteeringBoardSection.jsx
import React from 'react';

// --- IMAGE PLACEHOLDERS ---
// You will need to replace these with your actual board member photos.
// I've created 9 placeholders for you.
import boardMember1 from '../../assets/images/teacher.png';
import boardMember2 from '../../assets/images/teacher.png';
import boardMember3 from '../../assets/images/teacher.png';
import boardMember4 from '../../assets/images/teacher.png';
import boardMember5 from '../../assets/images/teacher.png';
import boardMember6 from '../../assets/images/teacher.png';
import boardMember7 from '../../assets/images/teacher.png';
import boardMember8 from '../../assets/images/teacher.png';
import boardMember9 from '../../assets/images/teacher.png';

const SteeringBoardSection = () => {
  const boardData = [
    { name: 'Board Member One', image: boardMember1 },
    { name: 'Board Member Two', image: boardMember2 },
    { name: 'Board Member Three', image: boardMember3 },
    { name: 'Board Member Four', image: boardMember4 },
    { name: 'Board Member Five', image: boardMember5 },
    { name: 'Board Member Six', image: boardMember6 },
    { name: 'Board Member Seven', image: boardMember7 },
    { name: 'Board Member Eight', image: boardMember8 },
    { name: 'Board Member Nine', image: boardMember9 },
  ];

  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 font-heading">
            Steering Board Members
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
          {boardData.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 font-heading">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SteeringBoardSection;
