'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Contact us today for a free consultation and 
            discover how we can help transform your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-semibold text-text-primary mb-8">
              Let's Start a Conversation
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Phone</h4>
                  <p className="text-text-muted">+1 (234) 567-8900</p>
                  <p className="text-sm text-text-muted">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                  <p className="text-text-muted">hello@nexacorp.com</p>
                  <p className="text-sm text-text-muted">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Office</h4>
                  <p className="text-text-muted">123 Business District</p>
                  <p className="text-text-muted">Tech City, TC 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-lg p-6">
              <h4 className="font-semibold text-text-primary mb-3">Why Choose Us for Your Next Project?</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                  Free initial consultation and project assessment
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                  Transparent pricing with no hidden costs
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                  Dedicated project manager for seamless communication
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                  Post-launch support and maintenance included
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="whatsapp-bot">WhatsApp Bot Deployments</option>
                    <option value="web-development">Web Development</option>
                    <option value="graphics-design">Graphics Design</option>
                    <option value="cyber-security">Cyber Security Consultancy</option>
                    <option value="civil-engineering">Civil Engineering</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message <Send className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-text-muted mt-4 text-center">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}