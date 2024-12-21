import React from "react";

const HeroSummerizer = () => {
    return (
      <header className="w-full flex justify-center items-center flex-col">
          <h1 className="mt-5 text-8xl font-extrabold leading-[1.15] text-white sm:text-6xl text-center">
              Summerize your URL with <br className="max-md:hidden"/>
              <span className="gpt4_gradient">OpenAI GPT-4</span>
          </h1>
  
          <h2 className="mt-5 text-lg text-gray-200 sm:text-xl text-center max-w-2xl">
              Paste your URL into the box below and OpenAI GPT-4 will give you a quick and precise summary 
          </h2>
      </header>
    )
  }
  
  export default HeroSummerizer;