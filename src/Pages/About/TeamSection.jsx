// src/components/TeamSection.jsx
import React from 'react';

// --- IMAGE PLACEHOLDERS ---
// You will need to replace these with your actual team member photos.
import teamMember1 from '../../assets/images/teacher.png';
import teamMember2 from '../../assets/images/teacher.png';
import teamMember3 from '../../assets/images/teacher.png';
import teamMember4 from '../../assets/images/teacher.png';

const TeamSection = () => {
  const teamData = [
    {
      name: 'Greeg Graham',
      role: 'CEO',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio.',
      image: teamMember1
    },
    {
      name: 'Jennifer Greive',
      role: 'President',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio.',
      image: teamMember2
    },
    {
      name: 'Patrick Marx',
      role: 'Marketer',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio.',
      image: teamMember3
    },
    {
      name: 'Mike Coolbert',
      role: 'Partner',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio.',
      image: teamMember4
    }
  ];

  return (
    <section className="bg-gray-50 py-20 font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 font-heading">
            Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {teamData.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={member.image} 
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 font-heading">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                {member.role}
              </p>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
