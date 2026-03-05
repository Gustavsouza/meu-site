import React, { useState } from 'react';
import Card from '@/components/ui/Card';

const TeamMember = ({ name, role, image, bio }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="h-full overflow-hidden p-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={name}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-purple-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </Card>
  );
};

export default TeamMember;