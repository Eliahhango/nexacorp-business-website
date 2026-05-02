'use client'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              About NexaCorp
            </h2>
            <p className="text-xl text-text-muted mb-6 leading-relaxed">
              Founded in 2020, NexaCorp has rapidly established itself as a trusted partner for 
              businesses seeking comprehensive digital transformation solutions.
            </p>
            <p className="text-text-muted mb-8 leading-relaxed">
              Our multidisciplinary team brings together expertise in automation, web development, 
              design, cybersecurity, and civil engineering to provide holistic solutions that address 
              every aspect of modern business operations. We believe in building long-term partnerships 
              with our clients, supporting their growth from startup to scale.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Mission</h4>
                  <p className="text-sm text-text-muted">
                    Empowering businesses through innovative digital solutions that drive growth and efficiency.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Vision</h4>
                  <p className="text-sm text-text-muted">
                    To be the leading provider of integrated digital services that transform how businesses operate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface rounded-lg p-6 text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-text-muted">Years of Excellence</div>
              </div>
              <div className="bg-surface rounded-lg p-6 text-center">
                <div className="text-3xl font-heading font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-text-muted">Team Members</div>
              </div>
              <div className="bg-surface rounded-lg p-6 text-center">
                <div className="text-3xl font-heading font-bold text-highlight mb-2">25+</div>
                <div className="text-sm text-text-muted">Countries Served</div>
              </div>
              <div className="bg-surface rounded-lg p-6 text-center">
                <div className="text-3xl font-heading font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-text-muted">Client Satisfaction</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white">
              <h3 className="text-xl font-heading font-semibold mb-4">Our Values</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                  Innovation and continuous learning
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                  Client success as our primary metric
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                  Transparency in all communications
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                  Quality without compromise
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}