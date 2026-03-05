import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/ui/Button';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = ['Todos', 'Web', 'Mobile', 'Infraestrutura', 'Consultoria'];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com gestão de estoque, pagamentos e logística integrada.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      category: 'Web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
    {
      title: 'Mobile Banking App',
      description: 'Aplicativo bancário mobile com autenticação biométrica e transações em tempo real.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'AWS'],
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Migração e implementação de infraestrutura escalável na nuvem com alta disponibilidade.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      category: 'Infraestrutura',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      title: 'ERP System',
      description: 'Sistema de gestão empresarial integrado para controle financeiro, estoque e vendas.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      category: 'Web',
      technologies: ['Angular', 'Java', 'Oracle', 'Redis'],
    },
    {
      title: 'Website Redesign',
      description: 'Redesign completo de portal corporativo com foco em UX e performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
      category: 'Web',
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
    },
    {
      title: 'API Development',
      description: 'Desenvolvimento de API RESTful escalável para integração de sistemas.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      category: 'Web',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    },
    {
      title: 'Security Audit',
      description: 'Auditoria completa de segurança com penetration testing e correção de vulnerabilidades.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      category: 'Consultoria',
      technologies: ['Penetration Testing', 'OWASP', 'Security'],
    },
    {
      title: 'Digital Transformation',
      description: 'Consultoria estratégica para transformação digital de grande corporação.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      category: 'Consultoria',
      technologies: ['Strategy', 'Change Management', 'Agile'],
    },
  ];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Projetos - Codevix | Portfólio de Soluções Tecnológicas</title>
        <meta
          name="description"
          content="Conheça os projetos desenvolvidos pela Codevix: e-commerce, aplicativos mobile, infraestrutura cloud, ERP e muito mais."
        />
      </Helmet>

      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nossos Projetos
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Transformando ideias em realidade através da tecnologia
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'primary' : 'outline'}
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;