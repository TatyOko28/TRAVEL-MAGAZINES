import React from 'react'
import Navbar from './Components/Navbar'
import Top from './Components/Top'
import WelcomePage from './Components/WelcomePage'
import ServicesSection from './Components/ServicesSection'
import IconLabels from './Components/IconLabels'
import LuxuryTravelCards from './Components/LuxuryTravelCards'
import CustomerReviewsHeader from './Components/CustomerReviewsHeader'
import TestimonialList from './Components/TestimonialList'
import TravelDetails from './Components/TravelDetails'
import LuxuryJetContactForm from './Components/LuxuryJetContactForm'
import OurPartners from './Components/OurPartners'
import TravelLinks from './Components/TravelLinks'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Top/>
      <WelcomePage/>   
      <ServicesSection/>  
      <IconLabels/>
      <LuxuryTravelCards/>
      <CustomerReviewsHeader/>      
      <TestimonialList/>
      <TravelDetails/>
      <LuxuryJetContactForm/>
      <OurPartners/>
      <TravelLinks/>
      <Footer/>
    </div>
  )
}

export default App