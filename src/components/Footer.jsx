import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                VIX PROMOÇÕES
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Economize mais acessando nossos grupos e promoções exclusivas! Não perca cupons e ofertas incríveis.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/links" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                  Promoções
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(27) 99625-8943</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>suportecode@codevix.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Vitória, ES - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Redes sociais / CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Siga e Economize</h3>
            <p className="text-gray-300 text-sm mb-3">
              Acompanhe nossas redes sociais e receba cupons exclusivos, dicas de economia e promoções em primeira mão!
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg hover:scale-110 transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg hover:scale-110 transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-lg hover:scale-110 transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} VIX PROMOÇÕES. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
