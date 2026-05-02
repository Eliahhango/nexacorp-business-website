import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const services = [
  { name: 'WhatsApp Bot Deployments', slug: 'whatsapp-bot-deployments' },
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Graphics Design', slug: 'graphics-design' },
  { name: 'Cyber Security Consultancy', slug: 'cyber-security-consultancy' },
  { name: 'Civil Engineering', slug: 'civil-engineering' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-text-on-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-highlight rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-heading font-bold">NexaCorp</span>
            </div>
            <p className="text-text-on-dark/80 leading-relaxed">
              We Build, Secure & Scale Your Digital World. Professional services that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-4">
              <Link href="/" className="block text-text-on-dark/80 hover:text-highlight transition-colors">
                Home
              </Link>
              <Link href="/#about" className="block text-text-on-dark/80 hover:text-highlight transition-colors">
                About Us
              </Link>
              <Link href="/#contact" className="block text-text-on-dark/80 hover:text-highlight transition-colors">
                Contact
              </Link>
              <Link href="/login" className="block text-text-on-dark/80 hover:text-highlight transition-colors">
                Login
              </Link>
              <Link href="/signup" className="block text-text-on-dark/80 hover:text-highlight transition-colors">
                Get Started
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Services</h4>
            <nav className="space-y-4">
              {services.map((service) => (
                <Link 
                  key={service.slug}
                  href={`/services/${service.slug}`} 
                  className="block text-text-on-dark/80 hover:text-highlight transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div className="text-text-on-dark/80">
                  <p>123 Business District</p>
                  <p>Tech City, TC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="tel:+1234567890" 
                  className="text-text-on-dark/80 hover:text-highlight transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:hello@nexacorp.com" 
                  className="text-text-on-dark/80 hover:text-highlight transition-colors"
                >
                  hello@nexacorp.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-on-dark/60 text-sm">
              © 2024 NexaCorp. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-text-on-dark/60 hover:text-highlight transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-on-dark/60 hover:text-highlight transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-text-on-dark/60 hover:text-highlight transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}