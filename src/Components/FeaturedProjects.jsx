import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function FeaturedProjects() {
  const cardAnimation = [useAnimation(), useAnimation()];

  const handleMouseEnter = (index) => {
    cardAnimation[index].start({ y: "0" });
  };
  const handleMouseOut = (index) => {
    cardAnimation[index].start({ y: "100%" });
  };

  return (
    <div className="w-full bg-zinc-900 py-[2.2vw]">
      <div className="w-full pb-[2.2vw] border-b-[1px] border-zinc-800 max-md:px-[3.8vw] max-md:py-[4.4vw]">
        <h1 className="text-[4.5vw] px-[3vw] font-NEUEMONTREAL tracking-tight max-lg:text-[6vw] max-md:text-[6.9vw]">
          Featured Projects
        </h1>
      </div>
      <div className="relative w-full flex items-center p-[2.5vw] max-md:flex-col">
        <div className="headings absolute top-1/2 left-1/2 -translate-x-[-50%] -translate-y-[-50%] "></div>

        <div className="card-container  px-[2vw] relative  w-1/2  max-md:w-full max-md:mb-[5vw]">
          <h1 className=" leading-none flex text-[#CDEA68] absolute z-50 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 max-md:left-1/2 tracking-tight font-FOUNDERSGROTESK overflow-hidden">
            {"FYDE".split("").map((item, idx) => {
              return (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cardAnimation[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.04 * idx,
                  }}
                  key={idx}
                  className=" inline-block leading-none text-[10vw] max-md:text-[15vw] font-FOUNDERSGROTESK tracking-tight"
                >
                  {item}
                </motion.span>
              );
            })}
          </h1>
          <div className="card-text mb-[1vw] flex items-center gap-3 max-md:mb-[3vw]">
            <div className="w-4 ml-[1.2vw] h-4 rounded-full bg-white max-lg:size-[1.3vw] "></div>
            <p className="text-[1vw] max-lg:text-[2vw] max-md:text-[3.5vw]">
              FYDE
            </p>
          </div>
          <div
            onMouseEnter={() => {
              handleMouseEnter(0);
            }}
            onMouseLeave={() => {
              handleMouseOut(0);
            }}
            className="card relative w-full h-[80vh] max-xl:h-[60vh] max-lg:h-[30vh] max-md:h-[45vh] rounded-3xl hover:scale-[0.96] transition ease-linear bg-zinc-800 overflow-hidden"
          >
            <img
              className="w-full h-full bg-cover"
              src="https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="card-container relative px-[2vw] w-1/2 max-md:w-full max-md:mb-[5vw]">
          <h1 className=" overflow-hidden flex text-[10vw] leading-none text-[#CDEA68] absolute z-50 top-1/2 right-full max-md:right-1/2 translate-x-1/2 -translate-y-1/2 tracking-tight font-FOUNDERSGROTESK">
            {"VISE".split("").map((item, idx) => {
              return (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cardAnimation[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.04 * idx,
                  }}
                  key={idx}
                  className=" inline-block leading-none text-[10vw] max-md:text-[15vw] font-FOUNDERSGROTESK tracking-tight"
                >
                  {item}
                </motion.span>
              );
            })}
          </h1>
          <div className="card-text mb-[1vw] flex items-center gap-3 max-md:mb-[3vw]">
            <div className="w-4 ml-[1.2vw] h-4 rounded-full bg-white max-lg:size-[1.3vw]"></div>{" "}
            <p className="text-[1vw] max-lg:text-[2vw] max-md:text-[3.5vw]">
              FYDE
            </p>
          </div>
          <div
            onMouseEnter={() => {
              handleMouseEnter(1);
            }}
            onMouseLeave={() => {
              handleMouseOut(1);
            }}
            className="card w-full h-[80vh] max-xl:h-[60vh] max-lg:h-[30vh] max-md:h-[45vh] rounded-3xl hover:scale-[0.96] transition ease-linear bg-zinc-800 overflow-hidden"
          >
            <img
              className="w-full h-full bg-cover"
              src="https://images.unsplash.com/photo-1707058665580-164eb7421c1a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
