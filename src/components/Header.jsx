import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, MapPin, Phone, Utensils, Home, BookOpen, Users, MessageCircle } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const handleNavigation = (path, sectionId = null) => {
    if (path === '/' && sectionId) {
      navigate('/')
      setTimeout(() => scrollToSection(sectionId), 100)
    } else {
      navigate(path)
    }
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Início', action: () => handleNavigation('/', 'hero'), icon: Home },
    { name: 'Cardápio', action: () => handleNavigation('/cardapio'), icon: BookOpen },
    { name: 'Sobre', action: () => handleNavigation('/', 'about'), icon: Users },
    { name: 'Contato', action: () => handleNavigation('/', 'contact'), icon: MessageCircle }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <div className={`p-2 rounded-xl transition-colors duration-300 ${
              isScrolled ? 'bg-primary-100' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Utensils className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            </div>
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Marcao Burguer
            </span>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.name}
                  onClick={item.action}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50' 
                      : 'text-white hover:text-primary-200 hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </motion.button>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:(554) 499-1040"
              whileHover={{ scale: 1.05 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50' 
                  : 'text-white hover:text-primary-200 hover:bg-white/10'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>(554) 499-1040</span>
            </motion.a>
            
            <motion.button
              onClick={() => handleNavigation('/', 'contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Fazer Pedido
            </motion.button>
          </div>

          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-primary-50' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
      >
        <div className="container-custom py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.button
                  key={item.name}
                  onClick={item.action}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              )
            })}
            
            <motion.a
              href="tel:(554) 499-1040"
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">(554) 499-1040</span>
            </motion.a>
            
            <motion.button
              onClick={() => handleNavigation('/', 'contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navItems.length + 1) * 0.1 }}
            >
              Fazer Pedido
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}