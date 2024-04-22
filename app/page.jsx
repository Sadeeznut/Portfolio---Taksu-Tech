"use client"

import { Toaster } from "react-hot-toast";
import About from "./components/about/not strapi/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ImageSlider from "./components/ImageSlider"

import Landing from  "@/app/components/Landing"
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/app/components/Preloader/index';


export default function Home() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2500)
      }
    )()
  }, [])


  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Landing />
      <About />
      <ImageSlider />
      <Contact />
      <Toaster position="top-right" />
      <Footer />
    </main>
  )
}
