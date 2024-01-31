"use server";

import React from "react";
import {Resend} from "resend";
import { validateString, getErrorMessage } from "@/app/components/lib/utils";
import ContctFormEmail from "@/email/contact-form-email"
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend('re_VVJhfaDm_2u9GYseA4k9cosmUZwmb2b5D');
   
export const sendEmail = async (formData: FormData) => {
  const senderEmail =formData.get("senderEmail");
  const message =formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)){
    return {
      error: "Invalid sender email"
    }
  }
  if (!validateString (message, 5000)){
    return{
      error: "Invalid message"
    }
  }
let data;
  try{
    data = await resend.emails.send({
      from: 'Contact from <onboarding@resend.dev>',
      to: 'sadeeznut@gmail.com',
      subject: 'Hello World',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    }); 
  } catch (error: unknown){
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data,
  }
}
