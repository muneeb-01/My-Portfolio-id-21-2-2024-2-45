import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setrotate] = useState(null);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setrotate(angle - 180);
    });

    return () => {};
  }, []);

  return (
    <div className="eyes w-full h-screen relative overflow-hidden max-lg:h-[50vh] max-md:h-[40vh]">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed={window.innerWidth > 1024 ? "-0.45" : "0"}
        className="w-full h-full bg-center bg-cover bg-[url('/image/eyes.jpg')] relative"
      >
        <div className="absolute top-1/2 left-1/2  -translate-x-[50%] flex items-center justify-evenly -translate-y-[50%] gap-10 max-md:gap-[7vw]">
          <div className="flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100 max-xl:size-[19vw] max-md:size-[21vw] ">
            <div className="w-[9vw] relative flex items-center justify-center h-[9vw] rounded-full bg-black max-xl:size-[11vw] max-md:size-[13vw]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className={`absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-[1.8vw]`}
              >
                <div className="w-[1.8vw] h-[1.8vw] max-md:size-[4vw]  rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[14vw] h-[14vw] rounded-full bg-zinc-100  max-xl:size-[19vw] max-md:size-[21vw] ">
            <div className="w-[9vw] h-[9vw] rounded-full bg-black relative max-xl:size-[11vw] max-md:size-[13vw]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] line w-full h-[1.8vw] "
              >
                <div className="w-[1.8vw] h-[1.8vw] max-md:size-[4vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
