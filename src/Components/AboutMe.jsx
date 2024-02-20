import React from "react";

function AboutMe() {
  return (
    <div className="w-full bg-[#F6F6F6] py-[2.2vw] text-zinc-900 rounded-tl-3xl rounded-tr-3xl max-lg:py-[6vw] max-lg:px-[2vw]">
      <div className="w-full pb-[2.2vw] border-b-[1px] border-zinc-800">
        <h1 className="text-[4.5vw] px-[3vw] font-NEUEMONTREAL tracking-tight max-md:text-[7vw]">
          About me
        </h1>
      </div>
      <div className="w-full  flex items-start max-lg:flex-col p-[2vw] gap-[2vw] max-lg:px-[4vw]">
        <div className="w-1/2 h-full flex items-start max-lg:flex-col max-lg:w-full">
          <div className="w-1/2 h-full max-lg:w-full max-lg:mb-[4vw]">
            <p className="text-[1vw] font-medium border-b-[1px] border-zinc-900 inline-block pr-2 max-xl:text-[2vw] max-lg:flex-col max-lg:text-[2.3vw] max-md:text-[4vw]">
              Services:
            </p>
            <div className="mt-[4vw] max-lg:mt-[2vw]">
              {["FRONTEND WEBDEVELOPER"].map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="border-[1px] border-zinc-900 inline-block px-[1.1vw] py-[0.3vw] rounded-full text-[0.9vw] max-xl:text-[1.2vw] max-lg:text-[2vw] max-lg:px-[3vw] max-lg:py-[1vw] font-medium max-lg:shadow-md max-md:text-[2.8vw]"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-1/2 h-full max-lg:w-full max-lg:mb-[4vw]">
            <p className="text-[1vw] font-medium border-b-[1px] border-zinc-900 inline-block pr-2 max-xl:text-[2vw] max-lg:text-[2.3vw] max-md:text-[4vw]">
              Skills:
            </p>
            <div className="mt-[4vw] max-lg:flex max-lg:gap-[1vw]">
              {["HTML", "CSS", "JavaScript", "React Js"].map((item, idx) => {
                return (
                  <button
                    key={idx}
                    className="border-[1px]  block mt-[0.5vw] border-zinc-900 px-[1.1vw] py-[0.3vw] rounded-full text-[0.9vw] max-xl:text-[1.2vw] font-medium max-lg:text-[2vw] max-lg:px-[3vw] max-lg:py-[1vw]   max-lg:shadow-md max-md:text-[2.8vw]"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full max-lg:w-full">
          <p className="text-[1vw] font-medium border-b-[1px] border-zinc-900 inline-block pr-2 max-xl:text-[2vw] max-lg:text-[2.3vw] max-md:text-[4vw]">
            About me:
          </p>
          <div className="mt-[4vw]">
            <div className="w-32 h-32 rounded-2xl bg-slate-200 max-xl:size-[9.5vw] max-lg:size-[16vw] max-md:size-[20vw] max-md:rounded-xl"></div>
            <div className="w-[85%] max-xl:w-[95%]  mt-[1.2vw] max-lg:mt-[3.5vw]">
              <p className="text-[1.1vw] max-xl:text-[1.6vw] font-medium max-lg:text-[2.5vw] max-md:text-[3.6vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                cumque saepe, laudantium enim voluptatibus aut repellat
                aspernatur officiis harum error, dignissimos quas fuga at
                impedit aliquid reiciendis adipisci omnis rerum? Explicabo, odio
                accusamus, similique debitis quam, modi fuga rem quas excepturi
                unde reiciendis voluptas tempore. Amet officia sit odit. Dolor
                explicabo, odit tempora nihil perferendis nostrum ut accusantium
                sapiente provident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
