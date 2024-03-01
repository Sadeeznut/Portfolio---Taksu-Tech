"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import CurrentTime from "@/app/components/CurrentTime";

const About = () => {
  const [error, setError] = useState(null);
  const [Aboutmee, setAboutmee] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:1337/api/aboutmee")
      .then((response) => {
        setAboutmee(response.data.data.attributes);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!Aboutmee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="bg-[#0f0f0f] mb-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="grid gap-1 md:grid-cols-8 sm:grid-cols-1 xl:grid-cols-10 2xl:grid-cols-10 2xl:mx-24 lg:mx-14 md:mx-1 text-[#d1d1d1] text-center md:text-left lg:text-left"
          id="about"
        >
          {/* IMG */}
          <div className="bg-[#1d1d1d]  rounded-xl md:row-start-1 md:row-span-4 md:col-span-3 h-auto">
            <img
              src="http://localhost:1337/uploads/hero_3cb1cbad82.jpg"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          {/* INTRO */}
          <div className="bg-[#1c1c1c]  rounded-xl md:row-start-1 md:row-span-2 md:col-span-5 p-6">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-14">
              {Aboutmee.t_name}
            </h1>
            <p className="text-base md:text-sm lg:text-base">
              {Aboutmee.desc_name}
            </p>
          </div>

          {/* SKILLS */}
          <div className="bg-[#1d1d1d] md:row-start-1 md:row-span-1 md:col-span-2 p-6 rounded-xl text-center">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-14">
              {Aboutmee.t_skills}
            </h1>
            <p className="text-base md:text-sm lg:text-sm">
              {Aboutmee.skill_1}
            </p>
            <p className="text-base md:text-sm lg:text-sm">
              {Aboutmee.skill_2}
            </p>
          </div>

          {/* PLAN */}
          <div className="bg-[#1d1d1d]  rounded-xl md:row-start-3 md:col-span-3 md:row-span-2 p-6">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-8">
              {Aboutmee.t_plan}
            </h1>

            <p className="text-sm md:text-xs lg:text-sm">
              {Aboutmee.desc_plan}
            </p>
          </div>

          {/* EDUCATION */}
          <div className="bg-[#1c1c1c]  rounded-xl md:row-start-3 md:col-span-2 md:row-span-2 p-8 lg:p-8 md:p-4 sm:p-8">
            <h1 className="text-3xl md:text-lg lg:text-2xl font-bold mb-8">
              {Aboutmee.t_education}
            </h1>

            <div className="flex justify-between text-xs md:text-xs lg:text-xs mb-2">
              <p className="text-left">{Aboutmee.edu_tk}</p>
              <p className="text-right text-gray-400">{Aboutmee.desc_tk}</p>
            </div>
            <div className="flex justify-between text-xs md:text-xs lg:text-xs mb-2">
              <p className="text-left">{Aboutmee.edu_sd}</p>
              <p className="text-right text-gray-400">{Aboutmee.desc_sd}</p>
            </div>
            <div className="flex justify-between text-xs md:text-xs lg:text-xs mb-2">
              <p className="text-left">{Aboutmee.edu_smp}</p>
              <p className="text-right text-gray-400">{Aboutmee.desc_smp}</p>
            </div>
            <div className="flex justify-between text-xs md:text-xs lg:text-xs mb-2">
              <p className="text-left">{Aboutmee.edu_smk}</p>
              <p className="text-right text-gray-400">{Aboutmee.desc_smk}</p>
            </div>
          </div>

          {/* TIME */}
          <div className="bg-[#1d1d1d] md:row-start-2 md:col-span-2 rounded-xl md:row-span-2 p-6 flex flex-col items-center justify-center">
            <CurrentTime />
            <p className="text-xs md:text-xs lg:text-xs text-gray-400">
              {Aboutmee.desc_time}
            </p>
            
          </div>

          <br />

          {/* LINK */}
          <div
            className=" rounded-xl md:row-start-4 md:col-span-2 md:row-span-2
            flex items-start gap-1 justify-center"
          >
            <a className="xl:h-24 lg:h-24 md:h-16 h-24 sm:h-16">
              <img
                src="http://localhost:1337/uploads/wha_12656cd19a.svg"
                className="w-full h-full "
              />
            </a>
            <a className="xl:h-24 lg:h-24 md:h-16 h-24 sm:h-24">
              <img 
                src="http://localhost:1337/uploads/twiter_f3b0218d4d.svg"
                className="w-full h-full "
              />
            </a>
            <a className="xl:h-24 lg:h-24 md:h-16 h-24 sm:h-24">
              <img
                src="http://localhost:1337/uploads/ig_2c83770c09.svg"
                className="w-full h-full"
              />
              
            </a>
          </div>
          <br />

          {/* ANOTHER LINK */}
          <div className="bg-[#1c1c1c] rounded-xl md:row-start-5 md:col-span-3 md:row-span-1 p-6">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-8">
              {Aboutmee.t_use}
            </h1>
            <div className="flex gap-2 xl:h-10 lg:h-10 md:h-6 h-8 sm:h-8">
              <img src="http://localhost:1337/uploads/vs_code_d11ca99766.svg" />
              <img src="http://localhost:1337/uploads/figma_3347cf63a5.svg" />
              <img src="http://localhost:1337/uploads/spotify_d052ee9016.svg" />
            </div>
          </div>

          {/* I USE */}
          <div className="bg-[#1c1c1c]  rounded-xl md:row-start-5 md:col-span-5 md:row-span-1 p-6">
            <h1 className="text-3xl md:text-xl lg:text-3xl font-bold mb-8">
              {Aboutmee.t_stack}
            </h1>

            <div className="flex gap-2 xl:h-10 lg:h-10 md:h-6 h-8 sm:h-8">
              <img src="http://localhost:1337/uploads/html_fde4ecf34d.svg" />
              <img src="http://localhost:1337/uploads/css_9ff55d107d.svg" />
              <img src="http://localhost:1337/uploads/js_92068e4710.svg" />
              <img src="http://localhost:1337/uploads/php_c6f220ea4d.svg" />
              <img src="http://localhost:1337/uploads/devicon_bootstrap_eeff6caaf9.svg" />
              <img src="http://localhost:1337/uploads/nextjs_871dc3ff18.svg" />
              <img src="http://localhost:1337/uploads/tailwind_a1f51d0221.svg" />
              <img src="http://localhost:1337/uploads/strapi_6ca85d0af9.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
