import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { ServicesSection } from '@/components/home/ServicesSection'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { ProcessSection } from '@/components/home/ProcessSection'
import { AboutSection } from '@/components/home/AboutSection'
import { Testimonials } from '@/components/home/Testimonials'
import { StatsBar } from '@/components/home/StatsBar'
import { ContactSection } from '@/components/home/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <StatsBar />
        <WhyChooseUs />
        <ProcessSection />
        <AboutSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}