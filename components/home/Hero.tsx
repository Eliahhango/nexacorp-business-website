'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-text-on-dark/90 text-sm font-medium mb-6">
              🚀 Transforming businesses since 2020
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-text-on-dark mb-6 leading-tight">
              We Build, Secure &{' '}
              <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">
                Scale
              </span>{' '}
              Your Digital World
            </h1>
            
            <p className="text-xl md:text-2xl text-text-on-dark/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional services in WhatsApp Bot Deployments, Web Development, 
              Graphics Design, Cyber Security, and Civil Engineering that drive 
              measurable business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-highlight mb-2">500+</div>
              <div className="text-text-on-dark/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-highlight mb-2">50+</div>
              <div className="text-text-on-dark/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-highlight mb-2">5</div>
              <div className="text-text-on-dark/70">Core Services</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-highlight mb-2">24/7</div>
              <div className="text-text-on-dark/70">Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}