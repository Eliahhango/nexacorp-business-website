'use client'
import Link from 'next/link'
import { XCircle, ArrowLeft, RefreshCcw, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-surface flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
            Payment Failed
          </h1>
          <p className="text-xl text-text-muted mb-8">
            We encountered an issue processing your payment. Don't worry, no charges were made to your account.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="space-y-6">
            <div className="text-left">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Common Reasons for Payment Failure</h2>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                  <span>Insufficient funds in your account</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                  <span>Incorrect card details or expired card</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                  <span>Your bank declined the transaction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                  <span>Network connectivity issues</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface rounded-lg p-4">
              <h3 className="font-semibold text-text-primary mb-2">What to do next?</h3>
              <p className="text-sm text-text-muted">
                Please check your payment details and try again. If the problem persists, 
                contact your bank or reach out to our support team for assistance.
              </p>
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
            <Button size="lg" onClick={() => window.history.back()}>
              <RefreshCcw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button variant="outline" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>

          <div className="text-sm text-text-muted space-y-2">
            <p>Need immediate assistance?</p>
            <div className="space-y-1">
              <p>Email: <a href="mailto:hello@nexacorp.com" className="text-accent hover:underline">hello@nexacorp.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="text-accent hover:underline">+1 (234) 567-8900</a></p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-4"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
            <h4 className="font-semibold text-blue-900 mb-2">Alternative Payment Options</h4>
            <p className="text-sm text-blue-800">
              If you continue having issues with card payments, we also accept bank transfers and 
              can arrange a payment plan for larger projects. Contact our sales team for more options.
            </p>
          </div>

          <Link href="/" className="inline-flex items-center text-text-muted hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}