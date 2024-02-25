"use client";

import CurrentTime from "@/app/components/CurrentTime";

const About = () => {
  return (
    <>
      <div
        className="bg-[#0f0f0f] mb-4"
        style={{ fontFamily: "Poppins , sans-serif" }}
      >
        <div
          className="grid gap-1 md:grid-cols-8 sm:grid-cols-1 xl:grid-cols-10 2xl:grid-cols-10 2xl:mx-24 lg:mx-14 md:mx-1 text-[#d1d1d1] text-center md:text-left lg:text-left"
          id="about"
        >
          {/* IMG */}
          <div className="bg-[#1d1d1d]  rounded-xl md:row-start-1 md:row-span-4 md:col-span-3 h-auto">
            <img
              src="/hero.jpg"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* INTRO */}
          <div className="bg-[#1c1c1c]  rounded-xl md:row-start-1 md:row-span-2 md:col-span-5 p-6">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-14">
            👋 I AM SADEWA
            </h1>
            <p className="text-base md:text-sm lg:text-base">
            Having an education from SMK TI BALI GLOBAL DENPASAR majoring in Software Engineering makes me interested in becoming a front-end web development.
            </p>
          </div>

          {/* SKILLS */}
          <div className="bg-[#1d1d1d] md:row-start-1 md:row-span-1 md:col-span-2 p-6 rounded-xl text-center">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-14">
            SKILLS
            </h1>
            <p className="text-base md:text-sm lg:text-sm">
            Front-end Developer
            </p>
            <p className="text-base md:text-sm lg:text-sm">
            Web Designer
            </p>
          </div>

          {/* PLAN */}
          <div className="bg-[#1d1d1d]  rounded-xl md:row-start-3 md:col-span-3 md:row-span-2 p-6">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-8">
            PLAN
            </h1>

            <p className="text-sm md:text-xs lg:text-sm">
            I plan to dig deeper into front-end, as I believe that with a combination of technical skills and a deep understanding of user needs, I can create web applications that are not only functional, but also meet high design standards
            </p>
          </div>

          {/* EDUCATION */}
          <div className="bg-[#1c1c1c]  rounded-xl md:row-start-3 md:col-span-2 md:row-span-2 p-8 lg:p-8 md:p-4 sm:p-8">
            <h1 className="text-3xl md:text-lg lg:text-2xl font-bold mb-8">
              EDUCATION
            </h1>

            <div className="flex justify-between text-xs md:text-xs lg:text-xs mb-2">
              <p className="text-left">-TK TITI DHARMA</p>
              <p className="text-right text-gray-400">2012-2013</p>
            </div>
            <div className="flex justify-between text-xs md:text-xs lg:text-xs mb-2">
              <p className="text-left">-SDN 24 PEMECUTAN</p>
              <p className="text-right text-gray-400">2013-2019</p>
            </div>
            <div className="flex justify-between text-xs md:text-xs lg:text-xs mb-2">
              <p className="text-left">-SMPN 2 DENPASAR</p>
              <p className="text-right text-gray-400">2019-2022</p>
            </div>
            <div className="flex justify-between text-xs md:text-xs lg:text-xs mb-2">
              <p className="text-left">-SMK TI BALI GLOBAL DENPASAR</p>
              <p className="text-right text-gray-400">2022-2025</p>
            </div>
          </div>

          {/* TIME */}
          <div className="bg-[#1d1d1d] md:row-start-2 md:col-span-2 rounded-xl md:row-span-2 p-6 flex flex-col items-center justify-center">
            <CurrentTime />
            <p className="text-xs md:text-xs lg:text-xs text-gray-400">
              Curent local time
            </p>
            
          </div>

          <br />

          {/* LINK */}
          <div
            className=" rounded-xl md:row-start-4 md:col-span-2 md:row-span-2
            flex items-start gap-1 justify-center"
          >
            <a href="https://wa.me/message/NKHCZP77TOE3K1 " className="xl:h-24 lg:h-24 md:h-16 h-24 sm:h-24 xs:h-24">
              <img
                src="/wha.svg"
                className="w-full h-full "
              />
            </a>
            <a href="https://www.instagram.com/ig.sadee/" className="xl:h-24 lg:h-24 md:h-16 h-24 sm:h-24 xs:h-24">
              <img 
                src="/ig.svg"
                className="w-full h-full "
              />
            </a>
            <a href="" className="xl:h-24 lg:h-24 md:h-16 h-24 sm:h-24 xs:h-24">
              <img
                src="/twiter.svg"
                className="w-full h-full"
              />
              
            </a>
          </div>
          <br />

          {/* ANOTHER LINK */}
          <div className="bg-[#1c1c1c] rounded-xl md:row-start-5 md:col-span-3 md:row-span-1 p-6">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-8">
              I USE
            </h1>
            <div className="flex gap-2 xl:h-10 lg:h-10 md:h-6 h-8 sm:h-8">
              <img src="/vs-code.svg" />
              <img src="/figma.svg" />
              <img src="/spotify.svg" />
            </div>
          </div>

          {/* I USE */}
          <div className="bg-[#1c1c1c]  rounded-xl md:row-start-5 md:col-span-5 md:row-span-1 p-6">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-8">
              SKILL TECH
            </h1>

            <div className="flex gap-2 xl:h-10 lg:h-10 md:h-6 h-8 sm:h-8">
              <img src="/html.svg" />
              <img src="/css.svg" />
              <img src="/js.svg" />
              <img src="/php.svg" />
              <img src="/bs.svg" />
              <img src="/nextjs.svg" />
              <img src="/tailwind.svg" />
              <img src="/strapi.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
