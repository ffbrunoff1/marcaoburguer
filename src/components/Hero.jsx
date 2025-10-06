import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Clock, MapPin, Phone, ChefHat, Utensils, Heart } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    { icon: ChefHat, text: "Feito com amor" },
    { icon: Clock, text: "Entrega rápida" },
    { icon: Heart, text: "Ingredientes frescos" }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-bg"></div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-300/10 rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white lg:pr-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">O melhor hambúrguer da cidade</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Sabor que 
              <span className="block text-secondary-300">Conquista</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-100 mb-8 leading-relaxed"
            >
              No Marcao Burguer, cada hambúrguer é uma experiência única. 
              Ingredientes frescos, sabor incomparável e o carinho de sempre 
              em cada mordida.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link to="/cardapio" className="btn-primary text-center">
                Ver Cardápio
              </Link>
              <button 
                onClick={scrollToContact}
                className="btn-secondary text-center"
              >
                Fazer Pedido
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-200">{feature.text}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative lg:pl-8"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -inset-4 bg-gradient-to-r from-white/20 to-secondary-300/20 rounded-full blur-xl"
              ></motion.div>
              
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/X_salada_1759773325819.png"
                alt="X-Salada - Marcao Burguer"
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-accent-500 text-white px-4 py-2 rounded-2xl font-bold text-lg shadow-lg"
              >
                🍔 Especial!
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Utensils className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-gray-800">Feito na hora</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-secondary-300" />
            <p className="font-semibold">Localização</p>
            <p className="text-sm text-gray-200">Padre Lebret 801</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Phone className="h-8 w-8 mx-auto mb-2 text-secondary-300" />
            <p className="font-semibold">Telefone</p>
            <p className="text-sm text-gray-200">(554) 499-1040</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Clock className="h-8 w-8 mx-auto mb-2 text-secondary-300" />
            <p className="font-semibold">Horário</p>
            <p className="text-sm text-gray-200">18h às 23h</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Star className="h-8 w-8 mx-auto mb-2 text-secondary-300" />
            <p className="font-semibold">Avaliação</p>
            <p className="text-sm text-gray-200">⭐⭐⭐⭐⭐</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}