'use client'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'NexaCorp transformed our customer service with their WhatsApp bot solution. We saw a 70% reduction in response time and our customers love the instant support. Exceptional work!',
    service: 'WhatsApp Bot Deployments'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    company: 'Global Retail Co.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'The team delivered our e-commerce platform on time and within budget. The site performance is incredible and sales have increased by 150% since launch. Highly recommended!',
    service: 'Web Development'
  },
  {
    name: 'Emily Watson',
    role: 'Founder',
    company: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'Their graphics design team created a stunning brand identity for our agency. The visual impact has been tremendous for our client acquisition. Professional and creative!',
    service: 'Graphics Design'
  },
  {
    name: 'James Thompson',
    role: 'CTO',
    company: 'FinTech Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'NexaCorp\'s cybersecurity audit revealed critical vulnerabilities we weren\'t aware of. Their expertise helped us achieve SOC 2 compliance. True security professionals.',
    service: 'Cyber Security'
  },
  {
    name: 'David Park',
    role: 'Project Manager',
    company: 'Construction Corp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'The architectural drawings and civil engineering work exceeded our expectations. Every detail was perfect and the project passed all inspections on first try.',
    service: 'Civil Engineering'
  },
  {
    name: 'Lisa Anderson',
    role: 'Operations Manager',
    company: 'Healthcare Plus',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'Working with NexaCorp was a game-changer for our digital transformation. They understood our needs perfectly and delivered solutions that truly work.',
    service: 'Multi-Service'
  }
]

export function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what business leaders and decision-makers 
            say about working with NexaCorp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-text-muted mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {testimonial.service}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-4">
              Join Our Growing List of Success Stories
            </h3>
            <p className="text-text-muted mb-6">
              Ready to see similar results for your business? Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/signup"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Start Your Project
              </a>
              <a 
                href="mailto:hello@nexacorp.com"
                className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
              >
                Request Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}