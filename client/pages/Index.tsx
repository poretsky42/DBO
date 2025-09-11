import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FeatureCards from '../components/FeatureCards'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeatureCards />
      </main>
      <Footer />
    </div>
  )
}
