'use client'
import { services } from '@/lib/services'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { motion } from 'framer-motion'

export function ServicesSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            From automation and development to design and security, we provide comprehensive digital solutions 
            that transform how businesses operate and grow in the modern marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard 
                service={service} 
                featured={service.slug === 'web-development'} 
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-text-muted mb-6">
              Our team can combine multiple services to create a tailored solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@nexacorp.com"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Email Us
              </a>
              <a 
                href="tel:+1234567890"
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}