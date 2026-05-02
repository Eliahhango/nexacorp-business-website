'use client'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Download, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-surface flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Thank you for choosing NexaCorp. Your project has been successfully initiated.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Order Details</h2>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-text-muted">Order ID:</span>
                  <span className="font-medium text-text-primary">#NXC-2024-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Amount:</span>
                  <span className="font-medium text-text-primary">$6,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Service:</span>
                  <span className="font-medium text-text-primary">Web Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Plan:</span>
                  <span className="font-medium text-text-primary">Professional</span>
                </div>
              </div>
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-text-primary mb-3">What Happens Next?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-accent text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Project Manager Assignment</p>
                    <p className="text-xs text-text-muted">Within 2 business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-accent text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Initial Consultation Call</p>
                    <p className="text-xs text-text-muted">Within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-accent text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Project Kickoff</p>
                    <p className="text-xs text-text-muted">Within 3 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-center space-x-2 text-sm text-text-muted">
                <Calendar className="w-4 h-4" />
                <span>Estimated completion: 8 weeks from project start</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg">
                Go to Dashboard <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Download Receipt
            </Button>
          </div>

          <div className="text-sm text-text-muted">
            <p>Need help? Contact us at <a href="mailto:hello@nexacorp.com" className="text-accent hover:underline">hello@nexacorp.com</a></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-8"
        >
          <Link href="/" className="text-text-muted hover:text-accent transition-colors">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}