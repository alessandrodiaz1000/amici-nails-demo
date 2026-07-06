import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MainTreatments } from './components/MainTreatments'
import { Services } from './components/Services'
import { Booking } from './components/Booking'
import { WhyChoose } from './components/WhyChoose'
import { GoogleReviews } from './components/GoogleReviews'
import { PriceClarity } from './components/PriceClarity'
import { Location } from './components/Location'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="site-container">
        <MainTreatments />
        <Services />
        <Booking />
        <WhyChoose />
        <GoogleReviews />
        <PriceClarity />
        <Location />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
