"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";
import TabButton from "./TabButton";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../globals.css";

const Abouts = () => {
  const [tab, setTab] = useState("Skills"); // "Skills" instead of "skills"
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title:"skills",
      id: "skills",
      content: (
        <ul className="text-sm lg:text-lg ">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>UI|UX Design</li>
        </ul>
      )
    },
    {
      title:"education",
      id: "education",
      content: (
        <ul className="pt-8 text-center">
          <li>TK TITI DHARMA</li>
          <li>SDN 24 PEMECUTAN</li>
          <li>SMPN 2 DENPASAR</li>
          <li>SMK TI BALI GLOBAL DENPASAR</li>
        </ul>
      )
    },
  ]

  const selectedTab = TAB_DATA.find((t) => t.id === tab)

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} >
      <div>
            <img src="/ombak.svg" className="w-full h-full mt-[-58px] sm:mt-[-130px] md:mt-[-190px] lg:mt-[-220px] 2xl:mt-[-350px]"/>
            </div>
      <div id="about" className="">
        <div className="lg:text-4xl text-2xl pt-[10px] md:pt-[50px] lg:pt-[90px]">
          <h1 className=" font-semibold text-center py-8 lg:py-12 text-[#1D1D1F]">
            ABOUT ME
          </h1>

          <div className="text-center text-sm lg:px-36 px-10 lg:text-xl">
    <p>I am Sadewa Bharaka Mahaputra. Having an education from SMK TI BALI GLOBAL DENPASAR
    majoring in Software Engineering makes me interested in becoming a front-end web development. I plan to
    dig deeper into front-end, as I believe that with a combination of technical skills and a
      deep understanding of user needs, I can
      create web applications that are not only functional, but also meet high
      design standards.</p>
          </div>
        </div>

        <div className="flex flex-row mt-6 align-center gap-10 justify-center text-xs lg:text-base  ">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "} Skills {""}
          </TabButton>|

          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "} Education {""}
          </TabButton>
        </div>
        <div className="mt-4 text-[#1D1D1F] text-center">{selectedTab ? selectedTab.content : null}</div>
      </div>
    </div>
  );
};

export default Abouts;
