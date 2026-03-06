import React from 'react'
import Hero from '../Section/Hero/Hero'
import StatsSection from '../Section/Stats/Stats'
import About from '../Section/About/About'
import WhyChooseUs from '../Section/ChooseUs/Why'
import Clients from '../Section/Client/Clients'
import MapSection from '../Section/Map/Map'
import CTASection from '../Section/CTA/Cta'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Clients/>
      <About/>
      <WhyChooseUs/>
      <StatsSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default Home