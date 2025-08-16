import React from 'react';
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
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img 
                src={member.image} 
                alt={`Photo of ${member.name}`}
                className="w-32 h-32 object-cover rounded-full shadow-lg mb-6 border-4 border-white"
              />
              <h3 className="text-xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
                {member.role}
              </p>
              <p className="mt-4 text-base text-gray-600 leading-7">
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