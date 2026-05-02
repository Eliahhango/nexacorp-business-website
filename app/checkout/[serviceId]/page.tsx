'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { CreditCard, Lock, ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'

interface CheckoutPageProps {
  params: {
    serviceId: string
  }
  searchParams: {
    plan?: string
  }
}

export default function CheckoutPage({ params, searchParams }: CheckoutPageProps) {
  const router = useRouter()
  const service = services.find(s => s.id === params.serviceId)
  const selectedPlan = searchParams.plan || 'professional'
  
  if (!service) {
    notFound()
  }

  const plan = service.pricing.find(p => p.name.toLowerCase() === selectedPlan.toLowerCase()) || service.pricing[1]

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    company: '',
    phone: '',
    projectDetails: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      router.push('/payment-success')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-heading font-bold text-text-primary">NexaCorp</span>
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-text-muted">Secure Checkout</span>
              <Lock className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Service
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">Order Summary</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {(() => {
                      const Icon = require('lucide-react')[service.icon]
                      return <Icon className="w-8 h-8 text-accent" />
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">{service.name}</h3>
                    <p className="text-text-muted text-sm">{service.shortDescription}</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-text-primary">Selected Plan:</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-text-primary">{plan.name}</span>
                      {plan.recommended && <Badge variant="secondary">Recommended</Badge>}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-text-primary">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-text-muted text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-text-primary">Total:</span>
                    <span className="text-2xl font-bold text-primary">
                      {plan.price === 'Custom' ? 'Custom Quote' : plan.price}
                    </span>
                  </div>
                  {plan.price !== 'Custom' && (
                    <p className="text-sm text-text-muted mt-1">One-time payment, no hidden fees</p>
                  )}
                </div>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-surface rounded-lg p-6">
              <h3 className="font-semibold text-text-primary mb-4">Your Information is Safe</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-text-muted">256-bit SSL encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-text-muted">PCI DSS compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-text-muted">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">Checkout Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Information */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">Project Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-text-primary mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                  />
                </div>
              </div>

              {/* Payment Information */}
              {plan.price !== 'Custom' && (
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Payment Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Card Number *</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="1234 5678 9012 3456"
                        />
                        <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          required
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">CVV *</label>
                        <input
                          type="text"
                          required
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">Cardholder Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.cardholderName}
                        onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Terms */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  className="w-5 h-5 text-accent border-gray-300 rounded focus:ring-accent mt-0.5"
                />
                <span className="text-sm text-text-muted">
                  I agree to the <a href="/terms" className="text-accent hover:underline">Terms of Service</a> and 
                  <a href="/privacy" className="text-accent hover:underline ml-1">Privacy Policy</a>
                </span>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  'Processing...'
                ) : (
                  plan.price === 'Custom' ? 'Request Quote' : `Complete Purchase - ${plan.price}`
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}