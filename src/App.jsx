import React from "react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Company from "./components/Company"
import Services from "./components/Services"
import About from "./components/About"
import WhyChoose from "./components/WhyChoose"
import OurVideo from "./components/OurVideo"
import Clients from "./components/Clients"
import Process from "./components/Process"
import Footer from "./components/Footer"
import Blogs from "./components/Blogs"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq"
import AppPromoPage from "./components/AppPromoPage"
import NumberImportant from "./components/NumberImportant"
import DigitalReality from "./components/DigitalReality"
import Brand from "./components/Brand"
import TextNav from "./components/textNav"


function App() {


  return (
    <>
      <div className="w-[100%]">
        
        <TextNav/>
         <Header/>
         <HeroSection/>
         <Company/>
         <Services/>
         <About/>
         <WhyChoose/>
         <OurVideo/>
         <Clients/>
         <Process/>
         <Blogs/>
         <Testimonials/>
         <Faq/>
         <AppPromoPage/>
         <NumberImportant/>
         <DigitalReality/>
         <Brand/>
         <Footer/>
      </div>
    </>
  )
}

export default App
