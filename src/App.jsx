import React from 'react'
import Navbar from './component/NavBar'
import HeroSection from './component/HeroSection'
import SocialMediaLanding from './component/StatsPage'
import ServicesSection from './component/ServiceSection'
import FeaturedProjects from './component/FeaturedProject'
import BlogInsights from './component/BlogsInsights'
import TransformCtaHero from './component/TransformCtaHero'
import Footer from './component/Fotter'

function App() {


  return (
    <>
     <Navbar/>
     <HeroSection/>
     <SocialMediaLanding/>
     <ServicesSection/>
     <FeaturedProjects/>
     <BlogInsights/>
     <TransformCtaHero/>
     <Footer/>
     {/* Hii This is Paras */}
    </>
  )
}

export default App
