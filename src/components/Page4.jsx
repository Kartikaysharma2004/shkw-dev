import React, { useEffect } from "react";
import gsap from "gsap";

const Page4 = () => {
  useEffect(() => {
    if (window.innerWidth > 758) {
      window.addEventListener("wheel", function (e) {
        gsap.to(".marque", {
          transform: e.deltaY > 0 ? "translateX(-200%)" : "translateX(100%)", // Ternary operator for condition
          duration: 5,
          repeat: -1,
          ease: "none",
        });
      });
    }
  });

  return (
    <>
      <div className="bg-[#F8F8F8] h-full w-full text-black">
        <div className="flex pt-10 items-center justify-center">
          <button
            type="button"
            className="border border-black hover:bg-black hover:text-white transition rounded-full p-4 w-48"
          >
            ・view all works
          </button>
        </div>

        <div id="page2" className="flex justify-center items-center shadow-lg">
          <div
            id="move"
            className="flex relative py-[5vw] overflow-hidden w-full max-sm:py-[8vw] text-[#333333]"
          >
            <div className="marque flex-shrink-0 flex items-center gap-[3vw] px-[1.5vw] animate-marquee">
              <h1 className="text-[4vw] max-sm:text-xl">
                Thank you for visiting
              </h1>
            </div>
            <div className="marque flex-shrink-0 flex items-center gap-[3vw] px-[1.5vw] animate-marquee">
              <h1 className="text-[4vw] max-sm:text-xl">
                Thank you for visiting
              </h1>
            </div>
            <div className="marque flex-shrink-0 flex items-center gap-[3vw] px-[1.5vw] animate-marquee">
              <h1 className="text-[4vw] max-sm:text-xl">
                Thank you for visiting
              </h1>
            </div>
            <div className="marque flex-shrink-0 flex items-center gap-[3vw] px-[1.5vw] animate-marquee">
              <h1 className="text-[4vw] max-sm:text-xl">
                Thank you for visiting
              </h1>
            </div>
            <div className="marque flex-shrink-0 flex items-center gap-[3vw] px-[1.5vw] animate-marquee">
              <h1 className="text-[4vw] max-sm:text-xl">
                Thank you for visiting
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
