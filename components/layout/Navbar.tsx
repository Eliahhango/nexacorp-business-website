'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/Button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  { name: 'WhatsApp Bot Deployments', slug: 'whatsapp-bot-deployments' },
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Graphics Design', slug: 'graphics-design' },
  { name: 'Cyber Security Consultancy', slug: 'cyber-security-consultancy' },
  { name: 'Civil Engineering', slug: 'civil-engineering' },
]

export function Navbar() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className={`text-xl font-heading font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              NexaCorp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className={`hover:text-accent transition-colors ${isScrolled ? 'text-text-muted' : 'text-white/80'}`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 hover:text-accent transition-colors ${isScrolled ? 'text-text-muted' : 'text-white/80'}`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-3 text-sm text-text-muted hover:bg-surface hover:text-accent transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/#about"
              className={`hover:text-accent transition-colors ${isScrolled ? 'text-text-muted' : 'text-white/80'}`}
            >
              About
            </Link>
            <Link 
              href="/#contact"
              className={`hover:text-accent transition-colors ${isScrolled ? 'text-text-muted' : 'text-white/80'}`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant={isScrolled ? "ghost" : "outline"} size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-text-primary' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-6">
                <Link 
                  href="/"
                  className="block text-text-muted hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                <div>
                  <div className="text-sm font-medium text-text-primary mb-3">Services</div>
                  <div className="space-y-3 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block text-sm text-text-muted hover:text-accent transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/#about"
                  className="block text-text-muted hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/#contact"
                  className="block text-text-muted hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4 border-t border-gray-100">
                  {session ? (
                    <div className="space-y-3">
                      <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          Dashboard
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          signOut()
                          setIsOpen(false)
                        }}
                      >
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup" onClick={() => setIsOpen(false)}>
                        <Button variant="primary" className="w-full">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}