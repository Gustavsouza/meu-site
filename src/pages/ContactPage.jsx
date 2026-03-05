import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Card from '@/components/ui/Card';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(27) 99625-8943',
      subtext: 'Seg - Sex, 9h às 18h',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@codevix.com.br',
      subtext: 'Resposta em até 24h',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av. Vitória',
      subtext: 'Vitória, ES - Brasil',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: '9h às 18h',
      subtext: 'Segunda a Sexta-feira',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contato - Codevix | Entre em Contato Conosco</title>
        <meta
          name="description"
          content="Entre em contato com a Codevix. Estamos prontos para transformar suas ideias em soluções tecnológicas inovadoras. Solicite um orçamento hoje mesmo."
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
              Entre em Contato
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Vamos conversar sobre como podemos ajudar seu negócio a crescer
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-gray-600">{info.subtext}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Preencha o formulário ao lado e nossa equipe entrará em contato o mais breve possível. Estamos ansiosos para conhecer seu projeto e ajudá-lo a alcançar seus objetivos.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Atendimento por Telefone</p>
                    <p className="text-gray-600 text-sm">
                      Nosso time está disponível de segunda a sexta, das 9h às 18h.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Resposta Rápida por E-mail</p>
                    <p className="text-gray-600 text-sm">
                      Respondemos todos os e-mails em até 24 horas úteis.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;