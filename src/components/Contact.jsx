import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { MapPin, Phone, Clock, Mail, MessageCircle, User, Calendar } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    reservationDate: '',
    reservationTime: '',
    numberOfPeople: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        "recipientEmail": "ffbrunoff@yahoo.com.br",
        "token": token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          reservationDate: '',
          reservationTime: '',
          numberOfPeople: ''
        })
      } else {
        setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
      }
    } catch (error) {
      setStatus({ message: 'Erro ao enviar mensagem. Tente novamente.', isError: true })
    }

    recaptchaRef.current.reset()
    
    setTimeout(() => {
      setStatus({ message: '', isError: false })
    }, 5000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      details: "Padre Lebret 801, G05 Bloco 03",
      action: "Ver no Mapa",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      details: "(554) 499-1040",
      action: "Ligar Agora",
      color: "from-secondary-500 to-secondary-600",
      href: "tel:(554) 499-1040"
    },
    {
      icon: Mail,
      title: "Email",
      details: "ffbrunoff@yahoo.com.br",
      action: "Enviar Email",
      color: "from-accent-500 to-accent-600",
      href: "mailto:ffbrunoff@yahoo.com.br"
    },
    {
      icon: Clock,
      title: "Horário",
      details: "Seg-Dom: 18h às 23h",
      action: "Fazer Reserva",
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atendê-lo! Faça seu pedido, reserve sua mesa 
            ou tire suas dúvidas. Nossa equipe está sempre disponível para 
            proporcionar a melhor experiência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 mb-4">{info.details}</p>
                
                {info.href ? (
                  <a
                    href={info.href}
                    className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300"
                  >
                    {info.action}
                  </a>
                ) : (
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300">
                    {info.action}
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Faça seu Pedido ou Reserva</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Solicitação
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="pedido">Fazer Pedido</option>
                  <option value="reserva">Fazer Reserva</option>
                  <option value="duvida">Tirar Dúvida</option>
                  <option value="sugestao">Deixar Sugestão</option>
                </select>
              </div>

              {formData.subject === 'reserva' && (
                <div className="grid md:grid-cols-3 gap-6 p-6 bg-primary-50 rounded-lg border border-primary-200">
                  <div>
                    <label htmlFor="reservationDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Data da Reserva
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="date"
                        id="reservationDate"
                        name="reservationDate"
                        value={formData.reservationDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reservationTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      Horário
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="time"
                        id="reservationTime"
                        name="reservationTime"
                        value={formData.reservationTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="numberOfPeople" className="block text-sm font-semibold text-gray-700 mb-2">
                      Pessoas
                    </label>
                    <select
                      id="numberOfPeople"
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Quantas?</option>
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="5">5 pessoas</option>
                      <option value="6+">6+ pessoas</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Descreva seu pedido, reserva ou dúvida..."
                  ></textarea>
                </div>
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-lg ${
                    status.isError 
                      ? 'bg-red-100 text-red-700 border border-red-200' 
                      : 'bg-green-100 text-green-700 border border-green-200'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary text-lg py-4"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa Localização</h3>
              <p className="text-lg text-gray-700 mb-8">
                Estamos localizados na Padre Lebret 801, em um ambiente aconchegante 
                e moderno, perfeito para desfrutar dos melhores hambúrgueres da cidade 
                com família e amigos.
              </p>
            </div>

            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Mapa Interativo</p>
                <p className="text-sm text-gray-500">Padre Lebret 801, G05 Bloco 03</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Horário de Funcionamento</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Segunda a Domingo</span>
                  <span className="font-bold">18h às 23h</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <p className="text-primary-100 text-sm">
                    🍔 Delivery disponível em todo horário de funcionamento
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Formas de Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone / WhatsApp</p>
                    <p className="text-gray-600">(554) 499-1040</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">ffbrunoff@yahoo.com.br</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}