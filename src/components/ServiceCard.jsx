import React from 'react';
import Card from '@/components/ui/Card';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  );
};

export default ServiceCard;