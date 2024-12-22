'use client'
import React from "react";
import { Tabs } from "./ui/tabs";
import Summerizer from "./summerizer";
import DummyContent from "./dummy";
import HeroSummerizer from "./heroSummerizer";
import { LinkPreview } from "./ui/link-preview";

const Hero = () => {
    const tabs = [
        {
          title: "AI Summerizer",
          value: "summerizer",
          content: (    
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-inter text-white bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900">
              <div className="flex items-center">
                <LinkPreview url="https://tailwindcss.com" className="font-extralight bg-gradient-to-l from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  AI Summerizer
                </LinkPreview>
                <img /> {/* Palceholder img for now -- for link icon */}
              </div>

              <div className="relative z-10 flex justify-start items-center w-full h-screen flex-col max-w-7xl mx-auto sm:px-16 px-6 top-16">
                <HeroSummerizer />
                <Summerizer />
              </div>
            </div>
          ),
        },
        {
          title: "AI Question Generator",
          value: "questionGenerator",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-inter text-white bg-gradient-to-br from-orange-300 via-orange-500 to-red-600">
              <p className="font-extralight bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">AI Question Generator</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "AI Essay Writer",
          value: "essayWriter",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-inter text-white bg-gradient-to-br from-purple-500 to-violet-900">
              <p className="font-extralight bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">AI Essay Writer</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "AI Flash Cards",
          value: "flashCards",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-inter text-white bg-gradient-to-br from-green-300 via-green-600 to-green-900">
              <p className="font-extralight bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">AI Flash Cards</p>
              <DummyContent />
            </div>
          ),
        },
        {
          title: "Random",
          value: "random",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-inter text-white bg-gradient-to-br from-cyan-400 via-cyan-600 to-cyan-900">
              <p className="font-extralight bg-gradient-to-r from-orange-300 via-orange-500 to-red-600 bg-clip-text text-transparent">Random tab</p>
              <DummyContent />
            </div>
          ),
        },
      ];

    return (
        <header className="w-full flex justify-center items-center flex-col">
            <h1 className="head_text">
                Stop wasting <span className="blue_gradient_dark_to_light">Time.</span> <br className="max-md:hidden" />
                Lets get right <span className="blue_gradient_light_to_dark">into it.</span>
            </h1>
      
            <h2 className="desc">
                Discover how these AI-powered tools can help you study more efficiently.
                Say goodbye to wasted time and hello to productivity.
            </h2>
            
            <div className="tab_container">
              <Tabs tabs={tabs}/>
            </div>
        </header>
    );
};

export default Hero;