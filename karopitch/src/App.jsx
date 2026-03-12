import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import WhoCanApply from './components/WhoCanApply'
import Investors from './components/Investors'
import FeaturedStartups from './components/FeaturedStartups'
import KaroStartupAbout from './components/KaroStartupAbout'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <HowItWorks />
        <WhoCanApply />
        <Investors />
        <FeaturedStartups />
        <KaroStartupAbout />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
