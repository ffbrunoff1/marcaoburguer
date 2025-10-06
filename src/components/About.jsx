import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, ChefHat, Heart, Flame, Star, MapPin } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "10+", label: "Anos de experiência", icon: Clock },
    { number: "5000+", label: "Clientes satisfeitos", icon: Users },
    { number: "100%", label: "Ingredientes frescos", icon: Heart },
    { number: "⭐⭐⭐⭐⭐", label: "Avaliação média", icon: Star }
  ]

  const values = [
    {
      icon: ChefHat,
      title: "Qualidade Premium",
      description: "Selecionamos apenas os melhores ingredientes para nossos hambúrgueres, garantindo sabor e frescor em cada mordida."
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada hambúrguer é preparado com carinho e dedicação, seguindo receitas exclusivas desenvolvidas ao longo dos anos."
    },
    {
      icon: Flame,
      title: "Sabor Inconfundível",
      description: "Nossa técnica especial de preparo e temperos únicos criam um sabor que marca presença e conquista paladares."
    },
    {
      icon: Award,
      title: "Tradição e Inovação",
      description: "Combinamos técnicas tradicionais com inovações gastronômicas para oferecer sempre o melhor aos nossos clientes."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre o Marcao Burguer</h2>
          <p className="section-subtitle">
            Uma história de paixão pela gastronomia e dedicação em servir 
            os melhores hambúrgueres da cidade, sempre com ingredientes 
            frescos e muito amor.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-accent-200 rounded-3xl blur-xl opacity-30"
              ></motion.div>
              
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/X_salada_1759773325819.png"
                alt="Ambiente do Marcao Burguer"
                className="relative w-full rounded-3xl shadow-2xl"
              />
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-primary-600" />
                  <div>
                    <p className="font-bold text-gray-800">Localização</p>
                    <p className="text-sm text-gray-600">Padre Lebret 801</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa História
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              O Marcao Burguer nasceu da paixão pela gastronomia e do sonho de 
              criar hambúrgueres únicos que tocassem o coração das pessoas. Localizado 
              na Padre Lebret 801, nos estabelecemos como referência em qualidade 
              e sabor na região.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada receita é cuidadosamente desenvolvida, priorizando ingredientes 
              frescos e de alta qualidade. Nosso X-Salada se tornou famoso pela 
              combinação perfeita de sabores e pela apresentação impecável.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary-500 to-accent-500 p-6 rounded-2xl text-white"
            >
              <ChefHat className="h-12 w-12 mb-4" />
              <h4 className="text-xl font-bold mb-2">Nossa Missão</h4>
              <p className="text-primary-100">
                Proporcionar momentos únicos através de hambúrgueres excepcionais, 
                criando memórias afetivas que nossos clientes levarão para sempre.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg card-hover"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-gradient">
            Nossos Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover"
                >
                  <div className="bg-gradient-to-r from-primary-100 to-accent-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-primary-600" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}