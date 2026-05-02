'use client'
import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '25+', label: 'Countries Served' },
  { number: '4+', label: 'Years Experience' },
  { number: '98%', label: 'Success Rate' },
  { number: '24/7', label: 'Support Available' }
]

export function StatsBar() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-highlight mb-2">
                {stat.number}
              </div>
              <div className="text-text-on-dark/80 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}