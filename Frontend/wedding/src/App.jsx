import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import OurStory from './components/sections/OurStory'
import EventDetails from './components/sections/EventDetails'
import Countdown from './components/sections/Countdown'
import Gallery from './components/sections/Gallery'
import RSVP from './components/sections/RSVP'
import Gifts from './components/sections/Gifts'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import Loader from './components/ui/Loader'
import GoldDivider from './components/ui/GoldDivider'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="wedding-app">
          <Navbar />
          <Hero />
          <GoldDivider />
          <OurStory />
          <GoldDivider />
          <Countdown />
          <GoldDivider />
          <EventDetails />
          <GoldDivider />
          <Gallery />
          <GoldDivider />
          <RSVP />
          <GoldDivider />
          <Gifts />
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  )
}

export default App
