import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaInstagram, FaAmazon, FaShoppingCart } from 'react-icons/fa';
import { Code2 } from 'lucide-react';
import PromotionTestimonials from '@/components/ui/PromotionTestimonials';



const links = [
  {
    title: 'Grupo Telegram',
    href: 'https://t.me/seugrupo',
    icon: FaTelegramPlane,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700', // segurança / confiança
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/seuperfil',
    icon: FaInstagram,
    color: 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700', // social / atenção
  },
  {
    title: 'Shopee',
    href: 'https://shopee.com.br/loja',
    icon: FaShoppingCart,
    color: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700', // ação / compra
  },
  {
    title: 'Amazon',
    href: 'https://amazon.com.br/promocoes',
    icon: FaAmazon,
    color: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700', // sucesso / confiança
  },
];

const LinksPage = () => {
  return (
    <>
      <Helmet>
        <title>Links e Promoções - Codevix</title>
        <meta
          name="description"
          content="Acesse nossos links e promoções diretamente: grupos, Instagram, Shopee, Amazon e mais."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-start bg-slate-50 p-6">
        {/* Header / Logo do Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="flex items-center gap-2 group mb-4">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Code2 className="w-6 h-6 text-white" />
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            VIX PROMOÇÕES
            </span>

          </div>
          <p className="text-gray-700 text-center max-w-sm">
            Acesse nossos grupos, redes sociais e promoções em um só lugar.
          </p>
        </motion.div>

        {/* Links principais */}
        <div className="flex flex-col w-full max-w-sm space-y-4">
          {links.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`flex items-center justify-center space-x-3 py-4 px-6 rounded-lg text-white font-semibold shadow-lg transition-all ${link.color}`}
            >
              <link.icon className="w-6 h-6" />
              <span>{link.title}</span>
            </motion.a>
          ))}
        </div>

        {/* Promoções adicionais */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 w-full max-w-md grid grid-cols-1 gap-4"
        >
          <div className="p-4 bg-orange-100 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-bold text-gray-900">Promoção Shopee</h3>
            <p className="text-gray-700 text-sm">Descontos imperdíveis de até 50%!</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-bold text-gray-900">Promoção Amazon</h3>
            <p className="text-gray-700 text-sm">Ofertas especiais selecionadas para você.</p>
          </div>
        </motion.div>
        {/* Carrossel de depoimentos */}
        <PromotionTestimonials />
      </div>
    </>
  );
};

export default LinksPage;
