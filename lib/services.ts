export interface Service {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  icon: string
  shortDescription: string
  features: string[]
  useCases: { title: string; description: string }[]
  process: { step: number; title: string; description: string }[]
  benefits: { title: string; description: string }[]
  pricing: {
    name: string
    price: string
    features: string[]
    recommended?: boolean
  }[]
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'whatsapp-bot-deployments',
    name: 'WhatsApp Bot Deployments',
    tagline: 'Automate Customer Engagement at Scale',
    shortDescription: 'Deploy intelligent WhatsApp bots that handle inquiries, bookings, and support 24/7.',
    icon: 'MessageCircle',
    description: 'Our WhatsApp Bot Deployment service empowers businesses to automate customer communication with precision and reliability. We design, develop, and deploy custom WhatsApp bots that seamlessly integrate with your existing CRM, e-commerce, or support systems. Whether you need automated FAQs, appointment scheduling, order tracking, or lead qualification, our bots deliver instant, accurate responses around the clock. Built on the official WhatsApp Business API, our solutions comply with Meta\'s policies and scale effortlessly from startups to enterprise-level deployments. Our team handles everything from bot architecture and conversation flow design to server infrastructure, monitoring, and ongoing maintenance. The result: reduced operational costs, improved response times, and a superior customer experience that drives retention and revenue.',
    features: [
      'Official WhatsApp Business API integration',
      'Custom conversation flow design',
      'CRM and e-commerce integrations',
      'Real-time analytics dashboard',
      'Multi-language support',
      'Automated escalation to human agents',
    ],
    useCases: [
      { title: 'E-commerce Order Tracking', description: 'Customers receive instant order status updates and can modify deliveries without contacting support.' },
      { title: 'Healthcare Appointment Booking', description: 'Patients book, reschedule, and receive reminders for appointments via WhatsApp.' },
      { title: 'Financial Services Onboarding', description: 'Banks automate KYC document collection and account setup through secure WhatsApp flows.' },
    ],
    process: [
      { step: 1, title: 'Discovery & Planning', description: 'We analyze your business needs, customer journey, and integration requirements.' },
      { step: 2, title: 'Bot Architecture & Design', description: 'Our team designs conversation flows, fallback logic, and integration blueprints.' },
      { step: 3, title: 'Development & Testing', description: 'We build, test, and QA the bot in a staging environment before go-live.' },
      { step: 4, title: 'Deployment & Monitoring', description: 'We deploy to production and provide real-time monitoring with SLA guarantees.' },
    ],
    benefits: [
      { title: '24/7 Availability', description: 'Never miss a customer inquiry with round-the-clock automated responses.' },
      { title: 'Cost Reduction', description: 'Reduce support costs by up to 60% through intelligent automation.' },
      { title: 'Instant Scalability', description: 'Handle thousands of concurrent conversations without additional staffing.' },
      { title: 'Data-Driven Insights', description: 'Gain actionable insights from conversation analytics and customer behavior.' },
    ],
    pricing: [
      { name: 'Starter', price: '$499', features: ['Up to 1,000 messages/month', 'Basic conversation flows', '1 WhatsApp number', 'Email support', '30-day setup'] },
      { name: 'Professional', price: '$1,299', features: ['Up to 10,000 messages/month', 'Advanced flows + CRM integration', '2 WhatsApp numbers', 'Priority support', 'Analytics dashboard', '14-day setup'], recommended: true },
      { name: 'Enterprise', price: 'Custom', features: ['Unlimited messages', 'Custom integrations', 'Multiple numbers', 'Dedicated account manager', 'SLA guarantee', 'White-label option'] },
    ],
  },
  {
    id: '2',
    slug: 'web-development',
    name: 'Web Development',
    tagline: 'High-Performance Websites That Drive Business Growth',
    shortDescription: 'Custom web applications built with modern technologies for speed, security, and scale.',
    icon: 'Globe',
    description: 'Our Web Development service delivers end-to-end digital solutions tailored to your business objectives. From corporate websites and e-commerce platforms to complex SaaS applications, we engineer every product with performance, security, and maintainability at the forefront. Our full-stack engineers leverage modern frameworks including Next.js, React, Node.js, and cloud-native architectures to build applications that scale with your business. We follow industry best practices including CI/CD pipelines, automated testing, and comprehensive documentation. Every project undergoes rigorous quality assurance before launch, and we offer ongoing support and optimization post-deployment. Our design-development collaboration ensures your digital presence reflects your brand identity while delivering an exceptional user experience that converts visitors into loyal customers.',
    features: [
      'Custom UI/UX design and development',
      'Next.js and React SPA development',
      'E-commerce and payment integration',
      'RESTful API and GraphQL development',
      'Cloud deployment (AWS/GCP/Azure)',
      'Performance optimization and SEO',
    ],
    useCases: [
      { title: 'Corporate Website Redesign', description: 'Enterprise clients modernize their digital presence with a high-performance, SEO-optimized corporate site.' },
      { title: 'E-commerce Platform Launch', description: 'Retailers launch scalable online stores with inventory management and payment processing.' },
      { title: 'SaaS Product Development', description: 'Startups bring their SaaS vision to life with a production-ready web application.' },
    ],
    process: [
      { step: 1, title: 'Requirements & Strategy', description: 'We define project scope, technical requirements, and business objectives.' },
      { step: 2, title: 'Design & Prototyping', description: 'Our designers create wireframes and high-fidelity mockups for your approval.' },
      { step: 3, title: 'Development & Integration', description: 'Agile development sprints with regular client reviews and feedback cycles.' },
      { step: 4, title: 'Testing & Launch', description: 'Comprehensive QA, performance testing, and staged production deployment.' },
    ],
    benefits: [
      { title: 'Blazing Fast Performance', description: 'Core Web Vitals optimized for top Google rankings and user satisfaction.' },
      { title: 'Mobile-First Design', description: 'Fully responsive experiences across all devices and screen sizes.' },
      { title: 'Enterprise Security', description: 'OWASP-compliant security practices and regular vulnerability assessments.' },
      { title: 'Scalable Architecture', description: 'Built to handle growth from day one with cloud-native infrastructure.' },
    ],
    pricing: [
      { name: 'Starter', price: '$2,499', features: ['Up to 10 pages', 'Responsive design', 'Basic SEO setup', 'Contact form', '2 revision rounds', '4-week delivery'] },
      { name: 'Professional', price: '$6,999', features: ['Up to 30 pages', 'Custom design system', 'CMS integration', 'E-commerce (up to 100 products)', 'Advanced SEO', 'API integrations', '8-week delivery'], recommended: true },
      { name: 'Enterprise', price: 'Custom', features: ['Unlimited pages', 'Custom architecture', 'Full-stack development', 'Dedicated dev team', 'SLA & maintenance', 'Cloud infrastructure'] },
    ],
  },
  {
    id: '3',
    slug: 'graphics-design',
    name: 'Graphics Design',
    tagline: 'Visual Identities That Command Attention',
    shortDescription: 'Professional brand design that communicates your value and elevates your market position.',
    icon: 'Palette',
    description: 'Our Graphics Design service helps businesses establish a commanding visual identity that resonates with their target audience and stands out in competitive markets. From brand identity systems and logo design to marketing collateral, digital assets, and presentation templates, our creative team delivers designs that combine aesthetic excellence with strategic communication. We begin every engagement with a thorough brand discovery process to understand your values, audience, and competitive landscape. This foundation guides every design decision, ensuring consistency and purposefulness across all touchpoints. Whether you are launching a new brand, refreshing an existing one, or creating targeted campaign materials, our designers deliver pixel-perfect work that reinforces your credibility and drives engagement across digital and print channels.',
    features: [
      'Brand identity and logo design',
      'Marketing collateral design',
      'Social media graphics packages',
      'Presentation and pitch deck design',
      'Packaging design',
      'Infographic and data visualization',
    ],
    useCases: [
      { title: 'Brand Identity Launch', description: 'Startups and established businesses receive a complete visual identity system for market entry.' },
      { title: 'Marketing Campaign Assets', description: 'Marketing teams receive cohesive digital and print assets for multi-channel campaigns.' },
      { title: 'Corporate Presentation Design', description: 'Executives present to boards and investors with polished, on-brand pitch decks.' },
    ],
    process: [
      { step: 1, title: 'Brand Discovery', description: 'In-depth consultation to understand your vision, audience, and competitive positioning.' },
      { step: 2, title: 'Concept Development', description: 'Our designers present multiple initial concepts based on research and strategy.' },
      { step: 3, title: 'Refinement & Feedback', description: 'Iterative refinement based on structured client feedback until the vision is realized.' },
      { step: 4, title: 'Final Delivery', description: 'Delivery of all assets in required formats with brand usage guidelines.' },
    ],
    benefits: [
      { title: 'Brand Recognition', description: 'Consistent visual identity that becomes instantly recognizable in your market.' },
      { title: 'Professional Credibility', description: 'Polished design that signals quality and builds trust with prospects and partners.' },
      { title: 'Market Differentiation', description: 'Stand out from competitors with a unique visual language that reflects your values.' },
      { title: 'Cross-Channel Consistency', description: 'Unified assets that maintain brand integrity across digital and print mediums.' },
    ],
    pricing: [
      { name: 'Starter', price: '$799', features: ['Logo design (3 concepts)', 'Color palette + typography', 'Business card design', '2 social media templates', 'File delivery (PNG, SVG, PDF)'] },
      { name: 'Professional', price: '$2,499', features: ['Full brand identity system', 'Logo + variations', 'Brand guidelines document', '10 marketing collateral items', 'Social media kit (20 templates)', 'Presentation template'], recommended: true },
      { name: 'Enterprise', price: 'Custom', features: ['Complete brand ecosystem', 'Unlimited revisions', 'Dedicated creative director', 'Campaign asset production', 'Annual retainer available', 'Print-ready files'] },
    ],
  },
  {
    id: '4',
    slug: 'cyber-security-consultancy',
    name: 'Cyber Security Consultancy',
    tagline: 'Proactive Defense for a Threat-Exposed World',
    shortDescription: 'Expert security assessments, compliance advisory, and incident response for organizations of all sizes.',
    icon: 'Shield',
    description: 'Our Cyber Security Consultancy service provides organizations with the expertise needed to identify vulnerabilities, strengthen defenses, and maintain compliance in an increasingly hostile digital landscape. Our certified security professionals combine offensive and defensive security disciplines to deliver comprehensive assessments, actionable remediation roadmaps, and ongoing advisory services. We work across industries including finance, healthcare, technology, and government, tailoring our approach to each organization\'s unique risk profile and regulatory obligations. Services span penetration testing and vulnerability assessments to security architecture reviews, SOC setup, and employee security awareness training. With a proactive, intelligence-driven methodology, we help clients stay ahead of emerging threats and demonstrate security maturity to customers, partners, and regulators.',
    features: [
      'Penetration testing (web, mobile, network)',
      'Vulnerability assessment and management',
      'Security architecture review',
      'Compliance advisory (ISO 27001, GDPR, PCI-DSS)',
      'Incident response and forensics',
      'Security awareness training',
    ],
    useCases: [
      { title: 'Pre-launch Security Audit', description: 'Technology companies validate their platform security before public launch or enterprise sales.' },
      { title: 'Regulatory Compliance', description: 'Financial institutions achieve and maintain compliance with PCI-DSS and relevant frameworks.' },
      { title: 'Incident Response', description: 'Organizations experiencing breaches receive rapid containment, forensics, and remediation.' },
    ],
    process: [
      { step: 1, title: 'Scoping & Threat Modeling', description: 'Define assessment scope, identify critical assets, and model threat actors.' },
      { step: 2, title: 'Assessment & Testing', description: 'Execute authorized testing using industry-standard methodologies (OWASP, PTES).' },
      { step: 3, title: 'Analysis & Reporting', description: 'Document findings with severity ratings, evidence, and prioritized remediation steps.' },
      { step: 4, title: 'Remediation Support', description: 'Guide your team through fixes and conduct verification testing to confirm closure.' },
    ],
    benefits: [
      { title: 'Risk Reduction', description: 'Identify and remediate critical vulnerabilities before adversaries exploit them.' },
      { title: 'Regulatory Confidence', description: 'Meet compliance obligations and demonstrate security posture to auditors.' },
      { title: 'Reputation Protection', description: 'Prevent breaches that could damage customer trust and brand reputation.' },
      { title: 'Expert Guidance', description: 'Access to certified security professionals without the cost of full-time hires.' },
    ],
    pricing: [
      { name: 'Starter', price: '$1,999', features: ['Web application pentest (up to 20 endpoints)', 'Vulnerability report', 'Remediation guidance', 'Executive summary', '5-day engagement'] },
      { name: 'Professional', price: '$5,499', features: ['Full penetration test (web + network)', 'Compliance gap assessment', 'Detailed technical report', 'Remediation workshop', 'Retesting included', '14-day engagement'], recommended: true },
      { name: 'Enterprise', price: 'Custom', features: ['Red team exercise', 'Full security program audit', 'Architecture review', 'Ongoing advisory retainer', 'Incident response SLA', 'CISO-on-demand'] },
    ],
  },
  {
    id: '5',
    slug: 'civil-engineering',
    name: 'Civil Engineering & Architectural Drawings',
    tagline: 'Precision Engineering for Lasting Infrastructure',
    shortDescription: 'Professional civil engineering designs and architectural drawings for residential, commercial, and infrastructure projects.',
    icon: 'Building2',
    description: 'Our Civil Engineering and Architectural Drawings service delivers technically precise, code-compliant designs for residential, commercial, and infrastructure projects. Our team of licensed civil engineers and architects combines technical excellence with practical experience to produce drawings, calculations, and documentation that meet regulatory standards and stand up to the demands of real-world construction. From concept sketches and site analysis to detailed construction drawings and as-built documentation, we support projects through every phase of the design lifecycle. We utilize industry-standard software including AutoCAD, Revit, and Civil 3D to deliver accurate, coordinated drawings that minimize construction errors and cost overruns. Our work spans housing developments, commercial buildings, road networks, drainage systems, and structural assessments, serving developers, contractors, and government agencies.',
    features: [
      'Architectural design and floor plans',
      'Structural engineering calculations',
      'Civil and site engineering drawings',
      'AutoCAD and Revit drafting services',
      'Building permit documentation',
      'Construction supervision support',
    ],
    useCases: [
      { title: 'Residential Development', description: 'Property developers receive complete architectural and structural drawings for housing estates.' },
      { title: 'Commercial Building Design', description: 'Business owners get full architectural packages for retail centers, offices, and warehouses.' },
      { title: 'Infrastructure Projects', description: 'Government agencies and contractors receive road, drainage, and utility design packages.' },
    ],
    process: [
      { step: 1, title: 'Site Survey & Brief', description: 'We conduct site analysis and gather project requirements, constraints, and objectives.' },
      { step: 2, title: 'Concept & Schematic Design', description: 'Initial design concepts are developed and presented for client approval.' },
      { step: 3, title: 'Detailed Design & Drawings', description: 'We produce full construction drawings, specifications, and engineering calculations.' },
      { step: 4, title: 'Permit & Construction Support', description: 'We assist with regulatory submissions and provide support during construction.' },
    ],
    benefits: [
      { title: 'Code Compliance', description: 'All designs meet local building codes and regulatory requirements for seamless approvals.' },
      { title: 'Cost Accuracy', description: 'Precise drawings reduce estimation errors and minimize costly on-site design changes.' },
      { title: 'Licensed Professionals', description: 'Work produced by certified engineers and architects with proven project track records.' },
      { title: 'Timely Delivery', description: 'Structured workflows and milestone tracking ensure drawings are delivered on schedule.' },
    ],
    pricing: [
      { name: 'Starter', price: '$1,499', features: ['Architectural floor plans (up to 3 rooms)', 'Basic elevations', 'Site plan', 'PDF delivery', '2 revision rounds', '7-day turnaround'] },
      { name: 'Professional', price: '$3,999', features: ['Full architectural package', 'Structural drawings', 'MEP coordination', 'Bill of quantities', '3D visualization', 'Permit documentation', '21-day delivery'], recommended: true },
      { name: 'Enterprise', price: 'Custom', features: ['Multi-building complexes', 'Infrastructure design', 'Project management', 'Construction supervision', 'As-built drawings', 'Long-term retainer'] },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}