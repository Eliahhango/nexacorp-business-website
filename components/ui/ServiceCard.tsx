import Link from 'next/link'
import { Service } from '@/lib/services'
import { Badge } from './Badge'
import { Button } from './Button'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  service: Service
  featured?: boolean
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = require('lucide-react')[service.icon]

  return (
    <div className={`relative bg-white rounded-lg border ${featured ? 'border-accent shadow-lg' : 'border-gray-200'} p-6 hover:shadow-lg transition-shadow`}>
      {featured && (
        <Badge variant="secondary" className="absolute -top-2 left-4">
          Popular
        </Badge>
      )}
      
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
            {service.name}
          </h3>
          <p className="text-sm text-highlight font-medium">
            {service.tagline}
          </p>
        </div>
      </div>

      <p className="text-text-muted mb-6 leading-relaxed">
        {service.shortDescription}
      </p>

      <div className="space-y-3 mb-6">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center text-sm text-text-muted">
            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
            {feature}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-text-muted">
          Starting from <span className="font-semibold text-primary">{service.pricing[0].price}</span>
        </div>
        <Link href={`/services/${service.slug}`}>
          <Button variant="outline" size="sm">
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  )
}