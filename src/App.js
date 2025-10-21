import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ServicesSection from "./components/Service";
import Centrepage from "./components/CentrePage";
import IndustriesSection from "./components/IndustriesSection";
import AboutStatsSection from "./components/AboutStatsSection";
import WhyChooseUsAndTestimonial from "./components/WhyChooseUs";
import BlueCtaFooter from "./components/FooterAndCta";
import Services from "./components/servicepage";
import ContactUs from "./components/ContactUs";
import Solutionpage from "./components/solutionservice";
import TechnologyStackSection from "./components/techstackservice";
import Whyus from "./components/whyus";
import Discover from "./components/discoverservice";
import Careers from "./components/Careers";
import ProductPage from "./components/product";
import DataScienceTimeline from "./pages/dataandai";
import UidesignCycle from "./pages/UiDesign";
import Webdevelopmentcycle from "./pages/Webdevelopment";
import CybersecurityCycle from "./pages/Cybersecurity";
import CloudServiceCycle from "./pages/Cloudservice";
import IotSolutionsCycle from "./pages/Iotsolutions";
import NetworkingCycle from "./pages/Networking";
import Appdevelopment from "./pages/Appdevelopment";
import Productdevelopment from "./pages/Productdevelopment";
import Webhostingcycle from "./pages/Webhosting";
import Graphicdesigncycle from "./pages/Graphicdesign";
import DigitalmarketingCycle from "./pages/Digitalmarketing";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <ServicesSection />
              <Centrepage />
              <IndustriesSection />
              <AboutStatsSection />
              <WhyChooseUsAndTestimonial />
              <BlueCtaFooter />
            </>
          }
        />
   <Route
  path="/services"
  element={
    <>
      <Services />
      <Solutionpage />
      <TechnologyStackSection />
      <Whyus />
      <Discover />
      <BlueCtaFooter />
    </>
  }
/>

       
        <Route
          path="/contact"
          element={
            <>
              <ContactUs />
              <BlueCtaFooter />
            </>
          }
        />

         <Route
          path="/Appdevelopment"
          element={
            <>
              <Appdevelopment />
              <BlueCtaFooter />
            </>
          }
        />

          <Route
          path="/data-scince-timelinee"
          element={
            <>
              <DataScienceTimeline />
              <BlueCtaFooter />
            </>
          }
        />

          <Route
          path="/webhosting"
          element={
            <>
              <Webhostingcycle />
              <BlueCtaFooter />
            </>
          }
        />

        
          <Route
          path="/graphicdesign"
          element={
            <>
              <Graphicdesigncycle />
              <BlueCtaFooter />
            </>
          }
        />

        
          <Route
          path="/productdevelopment"
          element={
            <>
              <Productdevelopment />
              <BlueCtaFooter />
            </>
          }
        />

            <Route
          path="/CYBER-SECURITY"
          element={
            <>
              <CybersecurityCycle />
              <BlueCtaFooter />
            </>
          }
        />

           <Route
          path="/digitalmarketing"
          element={
            <>
              <DigitalmarketingCycle />
              <BlueCtaFooter />
            </>
          }
        />

             <Route
          path="/networking"
          element={
            <>
              <NetworkingCycle />
              <BlueCtaFooter />
            </>
          }
        />

          <Route
          path="/iot"
          element={
            <>
              <IotSolutionsCycle />
              <BlueCtaFooter />
            </>
          }
        />




            <Route
          path="/cloudservice"
          element={
            <>
              <CloudServiceCycle />
              <BlueCtaFooter />
            </>
          }
        />
            <Route
          path="/web-development"
          element={
            <>
              <Webdevelopmentcycle />
              <BlueCtaFooter />
            </>
          }
        />

         <Route
          path="/ui-ux"
          element={
            <>
              <UidesignCycle />
              <BlueCtaFooter />
            </>
          }
        />

         
        <Route
          path="/careers"
          element={
            <>
              <Careers />
              <BlueCtaFooter />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <ProductPage />
              <BlueCtaFooter />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
