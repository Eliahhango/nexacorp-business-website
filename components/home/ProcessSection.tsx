'use client'
import { Search, Users, Wrench, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business goals, current challenges, and project requirements through detailed consultation.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'Strategy & Planning',
    description: 'Our team develops a comprehensive project plan with timelines, milestones, and clear deliverables tailored to your needs.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Wrench,
    title: 'Development & Implementation',
    description: 'We execute the plan using agile methodologies, ensuring quality at every step with regular client reviews and feedback.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Rocket,
    title: 'Launch & Optimization',
    description: 'After thorough testing, we launch your solution and provide ongoing support to ensure optimal performance and growth.',
    color: 'from-orange-500 to-orange-600'
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            We follow a systematic approach that ensures project success, clear communication, 
            and exceptional results from concept to completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-lg p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200" />
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              Transparent Communication Every Step of the Way
            </h3>
            <p className="text-text-muted mb-6">
              You'll receive regular updates, have access to project management tools, and can track progress in real-time. 
              We believe in keeping our clients informed and involved throughout the entire process.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Weekly Progress Reports
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                24/7 Project Dashboard Access
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                Direct Team Communication
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}