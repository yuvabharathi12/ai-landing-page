import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProofBar from '@/components/ProofBar'
import LossAversionSection from '@/components/LossAversionSection'
import FrameworkSection from '@/components/FrameworkSection'
import DeliverablesSection from '@/components/DeliverablesSection'
import IndustrySwitcher from '@/components/IndustrySwitcher'
import FoundersCTA from '@/components/FoundersCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <ProofBar />
        <LossAversionSection />
        <FrameworkSection />
        <DeliverablesSection />
        <IndustrySwitcher />
        <FoundersCTA />
      </main>
      <Footer />
    </div>
  )
}
