import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServiceBySlug } from '@/lib/services'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Check, ArrowLeft } from 'lucide-react'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)
  
  if (!service) {
    notFound()
  }

  const Icon = require('lucide-react')[service.icon]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary to-accent">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Link 
                href="/"
                className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Icon className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                {service.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {service.tagline}
              </p>
              
              <Link href={`/checkout/${service.id}`}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8">
                Service Overview
              </h2>
              <div className="prose prose-lg max-w-none text-text-muted leading-relaxed">
                {service.description}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-12 text-center">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-text-muted leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-12 text-center">
                Real-World Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="bg-surface rounded-lg p-8">
                    <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-12 text-center">
                Our Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-lg p-6 h-full">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 mt-2">
                        {step.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-12 text-center">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-12 text-center">
                Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.pricing.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-white rounded-lg p-8 ${
                      plan.recommended ? 'border-2 border-accent shadow-lg' : 'border border-gray-200'
                    }`}
                  >
                    {plan.recommended && (
                      <Badge variant="secondary" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        Recommended
                      </Badge>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                        {plan.name}
                      </h3>
                      <div className="text-3xl font-heading font-bold text-primary mb-1">
                        {plan.price}
                      </div>
                      {plan.price !== 'Custom' && (
                        <div className="text-sm text-text-muted">One-time payment</div>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-text-muted text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/checkout/${service.id}?plan=${plan.name.toLowerCase()}`}>
                      <Button 
                        variant={plan.recommended ? 'primary' : 'outline'} 
                        className="w-full"
                      >
                        {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join hundreds of satisfied clients who have transformed their business with our {service.name.toLowerCase()} service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/checkout/${service.id}`}>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="mailto:hello@nexacorp.com">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Ask Questions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}