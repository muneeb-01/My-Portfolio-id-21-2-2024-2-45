import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full  bg-[#174943] relative  pt-[7vw] pb-[5vw] max-lg:pb-[12vw] rounded-tl-3xl rounded-tr-3xl max-md:rounded-tl-lg max-md:rounded-tr-lg max-md:pt-[10vw] max-md:pb-[7vw]">
      <div className=" overflow-hidden text-[28vw] max-lg:text-[40vw] max-lg:h-[22vh] flex items-center border-y-[0.1vw] pb-[3vw] border-gray-50">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: "8" }}
          className=" uppercase text-nowrap leading-[16vw] font-FOUNDERSGROTESK  tracking-tight"
        >
          i am muneeb
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: "8" }}
          className=" uppercase text-nowrap leading-[16vw] font-FOUNDERSGROTESK  tracking-tight pl-[1.2vw]"
        >
          i am muneeb
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
