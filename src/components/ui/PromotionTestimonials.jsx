// // src/components/ui/PromotionTestimonials.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import Card from './Card';
// import { Quote } from 'lucide-react';

// const testimonials = [
//   {
//     name: 'Gabriel Fernandes',
//     comment: 'Nossa, essas promoções são ótimas! Já economizei uma fortuna em cupons da Shopee!',
//     image: 'https://scontent.fvix6-2.fna.fbcdn.net/v/t39.30808-6/605730506_3018075375050800_1297282294479431349_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEqfrFCUT3SBkTRkvvEsvUtXxpFXBWUUYtfGkVcFZRRi-770XODlrhBNvIjBAVL3IfNgh3Z1R9MHn_ZNHo9ygSc&_nc_ohc=X9fevtOoeREQ7kNvwEZJ-B_&_nc_oc=AdkfgGSfhYTVEFvGBmYzOF6Wlpry-Asyv4t3OTeLDeCh6RruphaSlG-NLSQLVoCcFRg&_nc_zt=23&_nc_ht=scontent.fvix6-2.fna&_nc_gid=Cao7H6-i2P8P5i5N4z4FCQ&oh=00_AfoQf29mV7pZ-ESimMwJ1Szh63HKUIMo-b4Ribq_gPRkew&oe=697007F5',
//   },
//   {
//     name: 'Charles Fernandes',
//     comment: 'Nossa, essas divulgações de promoção são boas, mas preciso me abster, pois estou temperando a comida com água de praia para economizar sal 😂',
//     image: 'https://scontent.fvix6-1.fna.fbcdn.net/v/t39.30808-6/486530600_9249612731804684_8392119089311887571_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSJymk3cBlG8CLJF3yorT9MfUzKEd_y1Ux9TMoR3_LVfuHXe-0loFy2fBYWyTjNZ-0eXexqm3xVH9HFKkn-uZS&_nc_ohc=vIy6X32i3eEQ7kNvwGAw0ka&_nc_oc=AdmS-tkSbk-2cZse-KwzuCSP-jAsz1MU2Dj73wR0Qwo2mhlrJDj4Y91svu2NbULr7v4&_nc_zt=23&_nc_ht=scontent.fvix6-1.fna&_nc_gid=p8KKDofDbGlxy-TnUlKyww&oh=00_AfpsESXwBApjDkbLrYVWtFcRcmkeUoOmalKvllK72_7aWQ&oe=69700DF1',
//   },
//   {
//     name: 'Marilza Rosa',
//     comment: 'Recomendo demais! Estou sempre de olho nas ofertas, mas preciso me controlar ou vou gastar todo o meu salário!',
//     image: 'https://scontent.fvix6-1.fna.fbcdn.net/v/t1.6435-9/78325879_2462768697308534_1482799581627416576_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHUP6uc568DiVBc0bgcw7ewlITAxmw8UDmUhMDGbDxQOdHSAwE3Fpx6WDZ3E9AHlU_qR6TtIApatyyEJr8BnZUU&_nc_ohc=IFUuY2-4KYgQ7kNvwFIAJ4f&_nc_oc=AdmPQh3jPN43KwVeiyXdBbrINkbSFIrBgiGtqDkxT-3ogJoRhwTUyZTkEvMvUxOSGQY&_nc_zt=23&_nc_ht=scontent.fvix6-1.fna&_nc_gid=3vEiP8EQTOYFgD9eOliA5Q&oh=00_AfrRunTh7Slg9uoiluQXF_2MhnbY9NlJmem2TLXVnSlNmA&oe=6991C1A9',
//   },
  
// ];

// const PromotionTestimonials = () => {
//   return (
//     <section className="py-12 md:py-16 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
//           O Que Dizem Sobre Nossas Promoções
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//           {testimonials.map((t, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="h-full hover:shadow-2xl transition-all duration-300">
//                 <Quote className="w-8 h-8 text-orange-500 mb-4" />
//                 <p className="text-gray-700 leading-relaxed mb-4 italic">{t.comment}</p>
//                 <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <p className="font-semibold text-gray-900">{t.name}</p>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromotionTestimonials;
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Card from './Card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Gabriel Fernandes',
    comment: 'Nossa, essas promoções são ótimas! Já economizei uma fortuna em cupons da Shopee!',
     image: 'https://scontent.fvix6-2.fna.fbcdn.net/v/t39.30808-6/605730506_3018075375050800_1297282294479431349_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEqfrFCUT3SBkTRkvvEsvUtXxpFXBWUUYtfGkVcFZRRi-770XODlrhBNvIjBAVL3IfNgh3Z1R9MHn_ZNHo9ygSc&_nc_ohc=X9fevtOoeREQ7kNvwEZJ-B_&_nc_oc=AdkfgGSfhYTVEFvGBmYzOF6Wlpry-Asyv4t3OTeLDeCh6RruphaSlG-NLSQLVoCcFRg&_nc_zt=23&_nc_ht=scontent.fvix6-2.fna&_nc_gid=Cao7H6-i2P8P5i5N4z4FCQ&oh=00_AfoQf29mV7pZ-ESimMwJ1Szh63HKUIMo-b4Ribq_gPRkew&oe=697007F5',
  },
  {
    name: 'Charles Fernandes',
    comment: 'Nossa, essas divulgações de promoção são boas, mas preciso me abster, pois estou temperando a comida com água de praia para economizar sal 😂',
    image: 'https://scontent.fvix6-1.fna.fbcdn.net/v/t39.30808-6/486530600_9249612731804684_8392119089311887571_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSJymk3cBlG8CLJF3yorT9MfUzKEd_y1Ux9TMoR3_LVfuHXe-0loFy2fBYWyTjNZ-0eXexqm3xVH9HFKkn-uZS&_nc_ohc=vIy6X32i3eEQ7kNvwGAw0ka&_nc_oc=AdmS-tkSbk-2cZse-KwzuCSP-jAsz1MU2Dj73wR0Qwo2mhlrJDj4Y91svu2NbULr7v4&_nc_zt=23&_nc_ht=scontent.fvix6-1.fna&_nc_gid=p8KKDofDbGlxy-TnUlKyww&oh=00_AfpsESXwBApjDkbLrYVWtFcRcmkeUoOmalKvllK72_7aWQ&oe=69700DF1',
  },
  {
    name: 'Marilza Rosa',
    comment: 'Recomendo demais! Estou sempre de olho nas ofertas, mas preciso me controlar ou vou gastar todo o meu salário!',
   image: 'https://scontent.fvix6-1.fna.fbcdn.net/v/t1.6435-9/78325879_2462768697308534_1482799581627416576_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHUP6uc568DiVBc0bgcw7ewlITAxmw8UDmUhMDGbDxQOdHSAwE3Fpx6WDZ3E9AHlU_qR6TtIApatyyEJr8BnZUU&_nc_ohc=IFUuY2-4KYgQ7kNvwFIAJ4f&_nc_oc=AdmPQh3jPN43KwVeiyXdBbrINkbSFIrBgiGtqDkxT-3ogJoRhwTUyZTkEvMvUxOSGQY&_nc_zt=23&_nc_ht=scontent.fvix6-1.fna&_nc_gid=3vEiP8EQTOYFgD9eOliA5Q&oh=00_AfrRunTh7Slg9uoiluQXF_2MhnbY9NlJmem2TLXVnSlNmA&oe=6991C1A9',
  },
  {
    name: 'Lucas Lima',
    comment: 'Ótimos cupons e promoções! Agora consigo comprar sem me sentir culpado 😅',
    image: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=400',
  },
  {
    name: 'Fernanda Costa',
    comment: 'Sempre encontro descontos incríveis! Super recomendo!',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
  },
];

const PromotionTestimonials = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Número de cards visíveis
  const visibleCount = 3;

  // Duplicamos os slides para criar loop infinito
  const slides = [...testimonials, ...testimonials];

  useEffect(() => {
    const slideWidth = containerRef.current.scrollWidth / 2; // Metade porque duplicamos
    const duration = 55; // segundos para percorrer todos

    const animate = async () => {
      await controls.start({
        x: [-0, -slideWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duration,
            ease: 'linear',
          },
        },
      });
    };

    animate();
  }, [controls]);

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          O Que Dizem Sobre Nossas Promoções
        </h2>

        <div className="overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex gap-4"
            animate={controls}
          >
            {slides.map((t, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-[calc(100%/3)]`} // 3 cards visíveis
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300">
                  <Quote className="w-8 h-8 text-orange-500 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4 italic">{t.comment}</p>
                  <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="font-semibold text-gray-900">{t.name}</p>
                  </div>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromotionTestimonials;

