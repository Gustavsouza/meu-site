import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { ShieldCheck, Gift, Users, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>Economizar também é cuidar | Cupons e promoções de confiança</title>
        <meta
          name="description"
          content="Ajudo pessoas comuns a economizarem dinheiro com cupons e promoções reais, pensadas para o dia a dia. Sem empurrar nada, só ajudando de verdade."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Economizar também é uma forma de cuidado
          </motion.h1>

          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-10">
            Cuidar da casa, da família, dos filhos e de si mesmo começa por fazer
            escolhas melhores — inclusive na hora de comprar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#grupos"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              Quero economizar com tranquilidade
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

{/* HISTÓRIA INTERATIVA */}
<section className="py-24 bg-gradient-to-b from-purple-50 via-white to-green-50">
  <div className="max-w-4xl mx-auto px-6 text-gray-700">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-10 text-lg leading-relaxed"
    >
      <h2 className="text-3xl font-bold text-purple-700">
        💜 Uma história que começou em casa
      </h2>

      <p>
        Durante muitos anos, ajudar as pessoas a economizar nunca foi um “negócio”
        pra mim. Foi algo natural.
      </p>

      {/* BLOCO INTERATIVO – PERGUNTAS */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100"
      >
        <p className="font-medium text-gray-800 mb-3">
          Alguém sempre perguntava:
        </p>

        <p className="italic text-gray-600">
          “Isso vale a pena?” <br />
          “Esse preço tá bom mesmo?” <br />
          “Será que não tem um cupom?”
        </p>
      </motion.div>

      <p>
        E eu ia atrás. Pesquisava, comparava, testava lojas, caçava cupons,
        esperava o melhor momento.
      </p>

      <p className="text-purple-700 font-medium">
        Não porque alguém me pagava por isso — mas porque ninguém gosta de gastar
        dinheiro à toa.
      </p>

      {/* COMPRAS DO DIA A DIA */}
      <h3 className="text-2xl font-semibold text-gray-900">
        🛒 Compras do dia a dia, não luxo
      </h3>

      <p className="font-medium">
        Muita gente não compra por impulso… compra porque precisa.
      </p>

      {/* LISTA HUMANIZADA */}
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          '👩‍👧 Uma mãe comprando algo pro filho',
          '🤰 Uma gestante preparando tudo com carinho',
          '🏡 Uma dona de casa cuidando do lar',
          '💳 Alguém tentando aliviar o orçamento do mês',
        ].map((text, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
          >
            {text}
          </motion.div>
        ))}
      </div>

      <p>
        Mesmo assim, muita gente acaba pagando mais caro — não por descuido,
        mas por falta de tempo, de informação, de ajuda.
      </p>

      {/* BLOCO DE VALORES */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-green-50 border border-green-200 rounded-2xl p-6"
      >
        <h3 className="text-xl font-semibold text-green-700 mb-3">
          🤍 Aqui não tem empurração
        </h3>

        <p>
          Eu não quero te convencer a comprar algo que você não precisa.
          Não crio urgência falsa. Não empurro produto.
        </p>

        <ul className="mt-4 space-y-2">
          <li>👉 quando vale a pena, eu aviso</li>
          <li>👉 quando tem cupom bom, eu compartilho</li>
          <li>👉 quando não compensa, eu prefiro ficar em silêncio</li>
        </ul>

        <p className="mt-4 font-semibold text-gray-800">
          Se eu não compraria pra minha família, eu não indico.
        </p>
      </motion.div>

      {/* FECHAMENTO EMOCIONAL */}
      <h3 className="text-2xl font-semibold text-purple-700">
        🌿 Se isso faz sentido pra você…
      </h3>

      <p>
        Talvez esse espaço seja pra você.
      </p>

      <p className="font-medium">
        Um lugar tranquilo, sem pressão, onde economizar é parte do cuidado.
      </p>

      {/* CTA SUAVE */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <a
          href="#grupos"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl text-center transition"
        >
          Quero economizar com tranquilidade
        </a>

        <a
          href="#grupos"
          className="text-green-600 underline underline-offset-4 text-center font-medium"
        >
          Entrar no grupo (sem compromisso)
        </a>
      </div>

      <p className="text-sm text-gray-500">
        Sem spam • Sem pressão • Você pode sair quando quiser
      </p>
    </motion.div>
  </div>
</section>



      {/* CONFIANÇA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: 'Indicação consciente',
              text: 'Nada de empurrar produtos. Só compartilho o que realmente faz sentido.',
            },
            {
              icon: Gift,
              title: 'Economia real',
              text: 'Cupons e promoções pensados para o dia a dia da casa e da família.',
            },
            {
              icon: Users,
              title: 'Você não está sozinho',
              text: 'Uma comunidade de pessoas que gostam de comprar melhor e gastar menos.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 text-center"
            >
              <item.icon className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA GRUPOS */}
      <section
        id="grupos"
        className="py-24 bg-gradient-to-br from-green-500 to-green-600 text-white"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Um grupo para quem gosta de cuidar do próprio dinheiro
          </h2>

          <p className="text-lg text-green-100 mb-10">
            Promoções úteis, cupons honestos e dicas que ajudam no orçamento.
            Sem excesso de mensagens e sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/seugrupo"
              target="_blank"
              className="bg-white text-green-600 font-bold px-8 py-4 rounded-xl hover:bg-green-100 transition"
            >
              Entrar no Telegram
            </a>

            <a
              href="https://wa.me/seulink"
              target="_blank"
              className="bg-white text-green-600 font-bold px-8 py-4 rounded-xl hover:bg-green-100 transition"
            >
              Entrar no WhatsApp
            </a>
          </div>

          <p className="text-sm text-green-100 mt-6">
            💚 Respeito • 🔒 Confiança • 💸 Economia de verdade
          </p>
        </div>
      </section>
    </>
  )
}
