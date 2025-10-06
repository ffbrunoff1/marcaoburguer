import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Utensils, Heart, Star, Award } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Marcao Burguer",
      items: [
        { text: "Os melhores hambúrgueres", icon: Utensils },
        { text: "Ingredientes frescos", icon: Heart },
        { text: "5 estrelas em qualidade", icon: Star },
        { text: "Tradição e sabor", icon: Award }
      ]
    },
    {
      title: "Contato",
      items: [
        { text: "Padre Lebret 801, G05 Bloco 03", icon: MapPin },
        { text: "(554) 499-1040", icon: Phone, href: "tel:(554) 499-1040" },
        { text: "ffbrunoff@yahoo.com.br", icon: Mail, href: "mailto:ffbrunoff@yahoo.com.br" },
        { text: "Seg-Dom: 18h às 23h", icon: Clock }
      ]
    },
    {
      title: "Cardápio",
      items: [
        { text: "X-Salada Premium" },
        { text: "Hambúrgueres Artesanais" },
        { text: "Ingredientes Selecionados" },
        { text: "Delivery Disponível" }
      ]
    },
    {
      title: "Serviços",
      items: [
        { text: "Delivery Próprio" },
        { text: "Reserva de Mesa" },
        { text: "Atendimento Personalizado" },
        { text: "Eventos Especiais" }
      ]
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pb-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const IconComponent = item.icon
                  return (
                    <motion.li 
                      key={itemIndex}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="group"
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                        >
                          {IconComponent && (
                            <IconComponent className="h-5 w-5 text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
                          )}
                          <span>{item.text}</span>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-3 text-gray-300">
                          {IconComponent && (
                            <IconComponent className="h-5 w-5 text-primary-500" />
                          )}
                          <span>{item.text}</span>
                        </div>
                      )}
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-3 rounded-xl">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold">Marcao Burguer</h4>
                <p className="text-gray-400">Sabor que conquista</p>
              </div>
            </motion.div>

            <div className="text-center lg:text-right">
              <p className="text-gray-400 mb-2">
                © {currentYear} Marcao Burguer. Todos os direitos reservados.
              </p>
              <p className="text-gray-500">
                Criado com <em className="text-primary-400 not-italic">
                  <a 
                    href="https://papum.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary-300 transition-colors duration-300"
                  >
                    Papum
                  </a>
                </em>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-6 border border-primary-500/20">
            <h4 className="text-xl font-bold mb-2 text-primary-400">🍔 Venha nos visitar!</h4>
            <p className="text-gray-300">
              Experimente o sabor que conquistou a cidade. 
              Estamos esperando você na Padre Lebret 801!
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}