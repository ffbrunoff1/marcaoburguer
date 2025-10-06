import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Utensils, Clock, Truck, Phone, Star, ChefHat, Heart, Award } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Utensils,
      title: "Cardápio Variado",
      description: "Uma seleção cuidadosa de hambúrgueres artesanais com ingredientes frescos e de qualidade premium.",
      features: ["X-Salada especial", "Ingredientes frescos", "Receitas exclusivas"],
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Preparamos seus pedidos com agilidade sem comprometer a qualidade que você espera.",
      features: ["Entrega em 30min", "Preparo rápido", "Sempre quentinho"],
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: Truck,
      title: "Delivery Próprio",
      description: "Sistema de entrega próprio para garantir que seu hambúrguer chegue perfeito na sua casa.",
      features: ["Entrega própria", "Embalagem especial", "Rastreamento pedido"],
      color: "from-accent-500 to-accent-600"
    },
    {
      icon: Phone,
      title: "Atendimento Personalizado",
      description: "Nossa equipe está sempre pronta para atender você com carinho e atenção especial.",
      features: ["Suporte dedicado", "Pedidos customizados", "Atendimento amigável"],
      color: "from-purple-500 to-purple-600"
    }
  ]

  const highlights = [
    {
      icon: Star,
      title: "Qualidade Garantida",
      description: "Todos os nossos hambúrgueres passam por rigoroso controle de qualidade."
    },
    {
      icon: ChefHat,
      title: "Chef Especializado",
      description: "Nossa equipe é treinada nas melhores técnicas de preparo gourmet."
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada hambúrguer é preparado com carinho e dedicação especial."
    },
    {
      icon: Award,
      title: "Receita Premiada",
      description: "Nossas receitas exclusivas são desenvolvidas com ingredientes selecionados."
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos uma experiência completa em hambúrgueres gourmet, 
            desde o preparo artesanal até a entrega na sua casa, sempre 
            com o melhor atendimento e qualidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher o 
              <span className="text-gradient"> Marcao Burguer?</span>
            </h3>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Somos mais que uma hamburgueria, somos uma experiência gastronômica 
              completa. Nossa dedicação em proporcionar momentos únicos através de 
              sabores inesquecíveis nos torna especiais.
            </p>
            
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-primary-50 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -inset-6 bg-gradient-to-r from-primary-200 to-accent-200 rounded-3xl blur-2xl opacity-30"
              ></div>
              
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/X_salada_1759773325819.png"
                alt="X-Salada Premium - Marcao Burguer"
                className="relative w-full rounded-3xl shadow-2xl"
              />
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className="font-bold text-gray-800">5 Estrelas</p>
                  <p className="text-sm text-gray-600">Avaliação</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-2xl shadow-lg"
              >
                <div className="text-center">
                  <Clock className="h-6 w-6 mx-auto mb-1" />
                  <p className="font-bold">30min</p>
                  <p className="text-xs text-accent-100">Entrega</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-4xl font-bold mb-6">Pronto para uma experiência única?</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Venha descobrir por que somos considerados a melhor hamburgueria da região. 
            Sabores inesquecíveis esperam por você!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/cardapio" className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Ver Cardápio Completo
            </Link>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105"
            >
              Fazer Pedido Agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}