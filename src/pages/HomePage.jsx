import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Server, Palette, Users, TrendingUp, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ServiceCard';
import SectionTitle from '@/components/SectionTitle';

const HomePage = () => {
  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Criamos sistemas robustos e escaláveis, desde aplicações web até soluções enterprise complexas.',
    },
    {
      icon: Server,
      title: 'Suporte e Infraestrutura',
      description: 'Garantimos a disponibilidade e performance da sua infraestrutura com suporte especializado 24/7.',
    },
    {
      icon: Palette,
      title: 'Soluções Digitais',
      description: 'Design e desenvolvimento de experiências digitais que conectam sua marca ao público.',
    },
    {
      icon: Users,
      title: 'Consultoria em TI',
      description: 'Orientação estratégica para transformação digital e otimização de processos tecnológicos.',
    },
  ];

  const metrics = [
    { icon: Clock, value: '10+', label: 'Anos de Experiência' },
    { icon: Award, value: '200+', label: 'Projetos Concluídos' },
    { icon: Users, value: '150+', label: 'Clientes Satisfeitos' },
    { icon: TrendingUp, value: '98%', label: 'Taxa de Sucesso' },
  ];

  return (
    <>
      <Helmet>
        <title>Codevix - Soluções Completas em Tecnologia</title>
        <meta
          name="description"
          content="A Codevix oferece soluções completas em tecnologia: desenvolvimento de sistemas, suporte, infraestrutura e consultoria em TI. Mais de 10 anos de experiência."
        />
      </Helmet>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519241047957-be31d7379a5d)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-800/90 to-purple-900/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Soluções Completas em Tecnologia
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              A Codevix transforma desafios tecnológicos em oportunidades de crescimento para o seu negócio
            </p>
            <Link to="/contato">
              <Button variant="primary" size="lg" className="group">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Soluções tecnológicas completas para impulsionar seu negócio"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              10+ Anos de Experiência
            </h2>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto">
              Comprometidos com a excelência e inovação em cada projeto
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <metric.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-purple-200" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm md:text-base text-purple-100">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

