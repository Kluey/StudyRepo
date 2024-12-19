import React from "react";
import { Tabs } from "./ui/tabs";

const Hero = () => {
    const tabs = [
        {
          title: "AI Summerizer",
          value: "summerizer",
          content: (
            <div className="big_tab">
              <p>AI Summerizer</p>
              
            </div>
          ),
        },
        {
          title: "AI Question Generator",
          value: "questionGenerator",
          content: (
            <div className="big_tab">
              <p>AI Question Generator</p>
              
            </div>
          ),
        },
        {
          title: "AI Essay Writer",
          value: "essayWriter",
          content: (
            <div className="big_tab">
              <p>AI Essay Writer</p>
              
            </div>
          ),
        },
        {
          title: "AI Flash Cards",
          value: "flashCards",
          content: (
            <div className="big_tab">
              <p>AI Flash Cards</p>
              
            </div>
          ),
        },
        {
          title: "Random",
          value: "random",
          content: (
            <div className="big_tab">
              <p>Random tab</p>
              
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
            <Tabs tabs={tabs}/>
        </header>
    );
};

export default Hero;
