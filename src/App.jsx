import { Header } from '../components/landing/header'
import { HeroSection } from '../components/landing/hero-section'
import { ProofBar } from '../components/landing/proof-bar'
import { LossAversionSection } from '../components/landing/loss-aversion-section'
import { FrameworkSection } from '../components/landing/framework-section'
import { DeliverablesSection } from '../components/landing/deliverables-section'
import { IndustrySwitcher } from '../components/landing/industry-switcher'
import { FoundersCTA } from '../components/landing/founders-cta'
import { Footer } from '../components/landing/footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <ProofBar />
        <LossAversionSection />
        <section id="framework">
          <FrameworkSection />
        </section>
        <section id="deliverables">
          <DeliverablesSection />
        </section>
        <section id="industries">
          <IndustrySwitcher />
        </section>
        <FoundersCTA />
      </main>
      <Footer />
    </div>
  )
}

