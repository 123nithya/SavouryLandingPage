import React from 'react'
import HeroSection from './HeroSection'
import AboutUs from './AboutUs'
import ResponsiveMenu from './Menu'
import Testimonial from './Testimonial'
import BlogSection from './BlogSection'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ResponsiveMenu />
      <Testimonial />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
