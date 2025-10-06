import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Star, Clock, ChefHat, Heart, Award, Utensils } from 'lucide-react'

export default function Products() {
  const products = [
    {
      name: "X-Salada",
      description: "Nosso clássico hambúrguer com ingredientes frescos, alface crocante, tomate maduro, queijo derretido e nosso molho especial. Uma combinação perfeita de sabores que conquista a cada mordida.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/X_salada_1759773325819.png",
      category: "Hamburguers",
      ingredients: [
        "Pão brioche artesanal",
        "Hambúrguer bovino 180g",
        "Queijo cheddar premium",
        "Alface americana crocante",
        "Tomate italiano fresco",
        "Cebola roxa caramelizada",
        "Molho especial da casa"
      ],
      allergens: ["Glúten", "Lactose"],
      prepTime: "15-20 min",
      calories: "580 kcal",
      featured: true
    }
  ]

  const categories = [
    {
      name: "Hamburguers",
      description: "Nossa seleção especial de hambúrgueres artesanais",
      icon: Utensils,
      count: 1,
      color: "from-primary-500 to-primary-600"
    }
  ]

  const features = [
    {
      icon: ChefHat,
      title: "Feito na Hora",
      description: "Todos os hambúrgueres são preparados frescos no momento do pedido"
    },
    {
      icon: Heart,
      title: "Ingredientes Premium",
      description: "Selecionamos apenas os melhores ingredientes para nossos pratos"
    },
    {
      icon: Award,
      title: "Receita Exclusiva",
      description: "Molhos e temperos desenvolvidos especialmente para nosso cardápio"
    },
    {
      icon: Star,
      title: "5 Estrelas",
      description: "Avaliação máxima dos nossos clientes em qualidade e sabor"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-8"
        >
          <Link 
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Voltar ao Início</span>
          </Link>
          
          <button 
            onClick={scrollToContact}
            className="btn-primary"
          >
            Fazer Pedido
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Nosso Cardápio</h1>
          <p className="section-subtitle">
            Descubra nossa seleção especial de hambúrgueres artesanais, 
            preparados com ingredientes frescos e muito amor. Cada receita 
            é única e desenvolvida para proporcionar uma experiência gastronômica inesquecível.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center card-hover"
              >
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Categorias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className={`bg-gradient-to-r ${category.color} rounded-2xl p-6 text-white cursor-pointer`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-10 w-10" />
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {category.count} {category.count === 1 ? 'item' : 'itens'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90">{category.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Hamburguers</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="food-card relative overflow-hidden"
              >
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                    ⭐ Especial
                  </div>
                )}

                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <ChefHat className="h-5 w-5 mr-2 text-primary-600" />
                        Ingredientes
                      </h4>
                      <ul className="space-y-2">
                        {product.ingredients.map((ingredient, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Clock className="h-5 w-5 text-primary-600" />
                          <span className="font-medium text-gray-900">{product.prepTime}</span>
                        </div>
                        <p className="text-sm text-gray-600">Tempo de preparo</p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Heart className="h-5 w-5 text-accent-600" />
                          <span className="font-medium text-gray-900">{product.calories}</span>
                        </div>
                        <p className="text-sm text-gray-600">Valor energético</p>
                      </div>

                      {product.allergens && (
                        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                          <p className="text-sm font-medium text-yellow-800 mb-1">Contém:</p>
                          <p className="text-sm text-yellow-700">{product.allergens.join(', ')}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to={`/produto/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors duration-300"
                    >
                      Ver Detalhes
                    </Link>
                    <button 
                      onClick={scrollToContact}
                      className="flex-1 btn-primary text-center"
                    >
                      Pedir Agora
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-12 text-center text-white mb-16"
        >
          <h3 className="text-4xl font-bold mb-6">Pronto para saborear?</h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Faça seu pedido agora e descubra por que somos considerados 
            a melhor hamburgueria da região. Entrega rápida e sabor garantido!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Fazer Pedido Agora
            </button>
            <a
              href="tel:(554) 499-1040"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105"
            >
              Ligar: (554) 499-1040
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}