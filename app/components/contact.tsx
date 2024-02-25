"use client"

import React from "react"
import { sendEmail } from "@/actions/sendEmail"
import SubmitBtn from "./submit-btn"
import toast from "react-hot-toast"



const Contact = () => {

  return (

    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <img src="laut2.svg" className="w-full h-full"  />
    <div className="bg-[#1c1c1c]">

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-10 lg:py-12 text-center md:text-left">
    
    <div id="contact" className="">
      <h1 className=" text-white font-semibold text-lg lg:text-4xl md:text-3xl sm:text-2xl pt-7">Contact Me</h1>
      <p className="pt-3 text-white text-xs lg:text-base md:text-sm sm:text-xs lg:px-0 md:px-12 sm:px-8">
        Feel free to communicate or ask questions through the form below or by sending a direct email. I will try my best to get back to you promptly. My inbox is always open, whether for inquiries or just to say hi. Thank you!
      </p>
    </div>
          <form
          className="flex flex-col "
          action={ async (formData) => {
            const {data, error} = await sendEmail(formData);
            if (error){
              toast.error(error)
              return;
            }

            toast.success("Email sent successfully!")
          }}>

<input
  className="h-8 sm:h-10 md:h-12 rounded-lg outline-none px-2 mb-3"
  name="senderEmail"
  type="email"
  required
  maxLength={500}
  placeholder="Your email.."
/>

<textarea
  className="h-32 sm:h-40 md:h-48 rounded-lg p-4 outline-none px-2 mb-3"
  name="message"
  required
  maxLength={5000}
  placeholder="Your message"
/>

      
      <SubmitBtn />
    </form>
    
  </div>
</div>
    </div>
    </div>
    
  )
}
export default Contact