'use client'
import { CheckCircle, Users, Award, Clock, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: '500+ successful projects delivered across various industries with 98% client satisfaction rate.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with 10+ years of experience in their respective domains.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure exceptional results every time.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver projects on time, every time, without compromising quality.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'All our solutions are built with security best practices and comply with industry standards.'
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'We use the latest technologies and frameworks to build future-ready solutions.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Why Choose NexaCorp?
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with business understanding to deliver solutions that 
            don't just meet requirements—they exceed expectations and drive real business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have accelerated their growth with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/signup"
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg"
            >
              Start Your Project
            </a>
            <a 
              href="/#contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              Schedule Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}