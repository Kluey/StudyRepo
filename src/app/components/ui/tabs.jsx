"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from '../../lib/utils';

export const Tabs = ({
  tabs: propTabs,
  containerClassName = "tabs_container", // The Buttons container
  activeTabClassName = "active_tab",
  tabClassName = "tab", // The buttons
  contentClassName = "tab_content"
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "px-4 py-2 font-medium font-inter border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200",
              tabClassName,
              {
                "rounded-l-xl": idx === 0,
                "rounded-r-xl": idx === propTabs.length - 1,
                "rounded-none": idx !== 0 && idx !== propTabs.length - 1, 
              }
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 dark:bg-zinc-800",
                  {
                    "rounded-l-lg bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200": idx === 0,
                    "bg-gradient from-orange-300 via-orange-500 to-red-600": idx === 1,
                    "bg-gradient from-purple-500 via-purple-500 to-violet-600": idx === 2,
                    "bg-gradient from-green-300 via-green-400 to-green-700": idx === 3,
                    "rounded-r-lg bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600": idx === 4,
                    "rounded-none": idx > 0 && idx < propTabs.length - 1,
                  },
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
