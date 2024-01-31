import React from "react"
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind} from "@react-email/tailwind"
 
type ContactFormEmailProps = {
  message:string
  senderEmail:string
}

export default function ContactFormEmail({ message, senderEmail}:
  ContactFormEmailProps){
  return(
    <Html>
       <Head />
       <Preview>New message from your portofolio site</Preview>
       <body className="bg-gray-100 text-black">
        <Container>
          <section className="bg-white border-black my-10 px-10 pt-4 rounded-md">
            <Heading className="leading-tight">
              You received the following message from the contact form</Heading>
              <Text>{message}</Text>
              <hr />
              <Text>The sender's email is: {senderEmail}</Text>
          </section>
        </Container>
       </body>
    </Html>
  )
}