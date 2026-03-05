import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Card from '@/components/ui/Card';

const ProjectCard = ({ title, description, image, technologies }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Card className="h-full overflow-hidden p-0 group cursor-pointer hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={image}
          alt={title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="bg-white p-3 rounded-full"
          >
            <ExternalLink className="w-6 h-6 text-purple-600" />
          </motion.div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;