import React, { useEffect, useState } from "react";

function HireMe() {
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
    <div className="w-full h-[100vh] max-lg:h-[60vh] bg-[#CDEA68] flex justify-center items-center flex-col relative">
      <div className="textcontainer flex justify-center items-center flex-col">
        {["ALWAYS", "READY", "TO START", "THE PROJECT"].map((item, idx) => {
          return (
            <div key={idx} className="masker flex items-center">
              <h1
                className={`uppercase font-FOUNDERSGROTESK tracking-tight leading-[10.5vw] ${
                  idx === 0
                    ? "text-[2vw] leading-[1vw] max-lg:leading-[2vw] max-lg:text-[4vw]"
                    : "text-[16vw] max-lg:text-[20vw] max-lg:leading-[13vw]"
                }  text-[#212121]`}
              >
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="absolute max-xl:top-[3%] max-lg:top-[-3%] top-[45%] left-1/2  -translate-x-[50%] flex items-center justify-evenly -translate-y-[50%] gap-10">
        <div className="flex justify-center items-center w-[12.5vw] h-[12.5vw]  max-xl:size-[14vw] max-lg:size-[20vw] rounded-full bg-zinc-100 ">
          <div className="w-[7.5vw] relative flex items-center justify-center h-[7.5vw] max-xl:size-[8.5vw] rounded-full bg-black">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className={`absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-[1.8vw]`}
            >
              <div className="w-[1.8vw] h-[1.8vw]  rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[12.5vw] h-[12.5vw] max-xl:size-[14vw] max-lg:size-[20vw] rounded-full bg-zinc-100 ">
          <div className="w-[7.5vw] h-[7.5vw] max-xl:size-[8.5vw] rounded-full bg-black relative">
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] line w-full h-[1.8vw] "
            >
              <div className="w-[1.8vw] h-[1.8vw] rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;

{
  /* <div className=""></div>
<div className=""></div>
<div className=""></div> */
}
