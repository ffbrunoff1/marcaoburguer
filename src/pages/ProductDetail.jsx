import React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Star, Clock, ChefHat, Heart, Award, Phone, MapPin, Users, Flame } from 'lucide-react'

export default function ProductDetail() {
  const { productName } = useParams()

  const product = {
    name: "X-Salada",
    description: "Nosso hambúrguer mais famoso e querido pelos clientes. Uma combinação perfeita de ingredientes frescos e selecionados, que resulta em uma explosão de sabores únicos. Preparado artesanalmente com muito carinho e técnicas especiais que fazem toda a diferença.",
    image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/X_salada_1759773325819.png",
    longDescription: "O X-Salada do Marcao Burguer é muito mais que um simples hambúrguer. É uma experiência gastronômica cuidadosamente elaborada para proporcionar momentos únicos. Nosso pão brioche é assado diariamente, garantindo frescor e textura perfeita. O hambúrguer bovino de 180g é preparado com carne selecionada e temperada com nossa mistura especial de ervas. O queijo cheddar premium derrete na medida certa, criando aquela cremosidade irresistível.",
    ingredients: [
      { name: "Pão brioche artesanal", description: "Assado diariamente com fermentação natural" },
      { name: "Hambúrguer bovino 180g", description: "Carne premium temperada com ervas especiais" },
      { name: "Queijo cheddar premium", description: "Derretido na medida perfeita" },
      { name: "Alface americana crocante", description: "Folhas frescas selecionadas diariamente" },
      { name: "Tomate italiano fresco", description: "Cortado na hora, suculento e doce" },
      { name: "Cebola roxa caramelizada", description: "Lentamente caramelizada para doçura perfeita" },
      { name: "Molho especial da casa", description: "Receita secreta desenvolvida exclusivamente" }
    ],
    nutritionalInfo: {
      calories: "580 kcal",
      protein: "32g",
      carbs: "45g",
      fat: "28g",
      fiber: "4g",
      sodium: "890mg"
    },
    allergens: ["Glúten", "Lactose", "Ovo"],
    prepTime: "15-20 min",
    category: "Hamburguers",
    featured: true,
    rating: 5,
    reviews: 127
  }

  const highlights = [
    {
      icon: ChefHat,
      title: "Receita Exclusiva",
      description: "Desenvolvida especialmente para o Marcao Burguer com ingredientes selecionados"
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada hambúrguer é preparado com carinho e atenção aos detalhes"
    },
    {
      icon: Award,
      title: "Mais Pedido",
      description: "Nosso hambúrguer mais popular e querido pelos clientes"
    },
    {
      icon: Flame,
      title: "Sabor Único",
      description: "Combinação perfeita de sabores que conquista a cada mordida"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Preparação do Pão",
      description: "Nosso pão brioche é cortado e levemente tostado para garantir a textura perfeita"
    },
    {
      number: "02", 
      title: "Grelhado da Carne",
      description: "O hambúrguer bovino é grelhado no ponto ideal, mantendo a suculência"
    },
    {
      number: "03",
      title: "Montagem Artesanal",
      description: "Cada ingrediente é cuidadosamente posicionado para a experiência perfeita"
    },
    {
      number: "04",
      title: "Finalização",
      description: "Últimos toques especiais e embalagem cuidadosa para entrega"
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
            to="/cardapio"
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Voltar ao Cardápio</span>
          </Link>
          
          <button 
            onClick={scrollToContact}
            className="btn-primary"
          >
            Pedir Agora
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
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
                className="absolute -inset-6 bg-gradient-to-r from-primary-200 to-accent-200 rounded-3xl blur-2xl opacity-30"
              ></motion.div>
              
              <img
                src={product.image}
                alt={product.name}
                className="relative w-full rounded-3xl shadow-2xl"
              />
              
              {product.featured && (
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-accent-500 text-white px-4 py-2 rounded-2xl font-bold shadow-lg"
                >
                  ⭐ Especial da Casa
                </motion.div>
              )}

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-800">{product.reviews} avaliações</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">({product.reviews} avaliações)</span>
                </div>
              </div>

              <h1 className="text-5xl font-bold text-gray-900 mb-6">{product.name}</h1>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">{product.description}</p>
              
              <p className="text-lg text-gray-600 leading-relaxed">{product.longDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6">
                <Clock className="h-8 w-8 text-primary-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Tempo de Preparo</h3>
                <p className="text-primary-700 font-medium">{product.prepTime}</p>
              </div>

              <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-2xl p-6">
                <Heart className="h-8 w-8 text-accent-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Calorias</h3>
                <p className="text-accent-700 font-medium">{product.nutritionalInfo.calories}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="flex-1 btn-primary text-lg py-4"
              >
                Pedir Agora
              </button>
              <a
                href="tel:(554) 499-1040"
                className="flex-1 btn-secondary text-lg py-4 text-center"
              >
                Ligar: (554) 499-1040
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Por que é Especial?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Ingredientes Premium</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {product.ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{ingredient.name}</h3>
                    <p className="text-gray-600">{ingredient.description}</p>
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
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Processo de Preparo</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-white rounded-2xl p-8 shadow-lg text-center card-hover"
              >
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary-300 to-accent-300"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Informações Nutricionais</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-primary-600">{product.nutritionalInfo.calories}</p>
                <p className="text-gray-600 font-medium">Calorias</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-secondary-600">{product.nutritionalInfo.protein}</p>
                <p className="text-gray-600 font-medium">Proteínas</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-accent-600">{product.nutritionalInfo.carbs}</p>
                <p className="text-gray-600 font-medium">Carboidratos</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-3xl font-bold text-purple-600">{product.nutritionalInfo.fat}</p>
                <p className="text-gray-600 font-medium">Gorduras</p>
              </div>
            </div>

            {product.allergens && (
              <div className="mt-6 bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">⚠️ Alérgenos:</h4>
                <p className="text-yellow-700">{product.allergens.join(', ')}</p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-6">Faça seu Pedido</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Telefone / WhatsApp</p>
                  <p className="text-primary-100">(554) 499-1040</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Localização</p>
                  <p className="text-primary-100">Padre Lebret 801, G05 Bloco 03</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Horário de Funcionamento</p>
                  <p className="text-primary-100">Seg-Dom: 18h às 23h</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <button 
                onClick={scrollToContact}
                className="w-full bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Pedir Agora - X-Salada
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}