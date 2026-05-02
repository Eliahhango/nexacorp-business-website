# NexaCorp - Business Website

A complete Next.js 14 production-grade multi-service business website built from scratch.

## 🚀 Features

### Services Offered
1. **WhatsApp Bot Deployments** - Automate customer engagement at scale
2. **Web Development** - High-performance websites that drive business growth
3. **Graphics Design** - Visual identities that command attention
4. **Cyber Security Consultancy** - Proactive defense for threat-exposed world
5. **Civil Engineering & Architectural Drawings** - Precision engineering for lasting infrastructure

### Website Features
- 📱 **Fully Responsive Design** - Mobile-first approach
- 🎨 **Modern UI/UX** - Professional business aesthetic with custom design system
- 🔐 **Authentication System** - NextAuth.js with protected routes
- 💳 **Checkout Flow** - Complete payment process (mock)
- 📊 **User Dashboard** - Project management and progress tracking
- ✨ **Animations** - Smooth Framer Motion transitions
- 🎯 **SEO Optimized** - Built with performance in mind

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Sora (headings)
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js
- **Forms**: React Hook Form + Zod validation
- **Payments**: Stripe UI components (mock)

## 🎨 Design System

### Colors
- **Primary**: #0A1F44 (Dark Navy Blue)
- **Accent**: #3B82F6 (Bright Blue)
- **Highlight**: #F59E0B (Amber/Gold)
- **Surface**: #EFF6FF (Light Blue-White)
- **Text Primary**: #0A1F44
- **Text Muted**: #64748B

### Typography
- **Headings**: Sora (400-800 weight)
- **Body**: Inter (400-700 weight)

## 📁 Project Structure

```
business-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── globals.css
│   ├── services/[slug]/page.tsx
│   ├── signup/page.tsx
│   ├── login/page.tsx
│   ├── dashboard/page.tsx
│   ├── checkout/[serviceId]/page.tsx
│   ├── payment-success/page.tsx
│   ├── payment-failed/page.tsx
│   └── api/auth/[...nextauth]/route.ts
├── components/
│   ├── providers/AuthProvider.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── StatsBar.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── ServiceCard.tsx
├── lib/
│   ├── services.ts
│   ├── auth.ts
│   └── utils.ts
├── middleware.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone [repository-url]
cd business-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
npm start
```

## 🔐 Authentication

The website includes a complete authentication system:

### Demo Credentials
- **Email**: demo@nexacorp.com
- **Password**: password

### Features
- Sign up / Sign in pages
- Protected routes (dashboard, checkout)
- Session management with NextAuth.js
- Form validation with Zod

## 💳 Checkout Process

Complete checkout flow with:
- Service selection
- Plan comparison
- Order summary
- Payment form (mock implementation)
- Success/failure handling

## 📱 Responsive Design

- Mobile-first responsive design
- Sticky navigation with scroll effects
- Hamburger menu for mobile devices
- Optimized for all screen sizes

## 🎯 SEO & Performance

- Server-side rendering with Next.js 14
- Optimized images and assets
- Clean semantic HTML structure
- Fast loading times
- Core Web Vitals optimized

## 📧 Contact Information

- **Email**: hello@nexacorp.com
- **Phone**: +1 (234) 567-8900
- **Address**: 123 Business District, Tech City, TC 12345

## 📄 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ using Next.js 14 and modern web technologies.