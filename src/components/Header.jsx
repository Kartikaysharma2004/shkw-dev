import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

const Header = () => {
  const Titleref = useRef();
  const Listref = useRef();
  const headingref = useRef();
  const subheadingref = useRef();

  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.from(Titleref.current, {
        duration: 1,
        y: -10, // Slide down effect
        opacity: 0,
        filter: "blur(10px)", // Add blur effect
        ease: "power2.inOut", // Smooth easing
      });

      gsap.from(Listref.current.querySelectorAll("li"), {
        duration: 1,
        opacity: 0,
        filter: "blur(10px)",
        y: -50,
        ease: "power2.out",
        stagger: 0.2,
      });
      gsap.to(headingref.current, {
        duration: 0.5,
        ease: "none",
        text: "DESIGN TO DEVELOPMENT",
      });
      gsap.to(subheadingref.current, {
        duration: 0.2,
        ease: "none",
        text: "SHINNOSUKE PORTFOLIO SITE",
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div className="hero">
        <div className="page1 sticky top-0 z-50">
          <div
            className="flex justify-between max-sm:px-5 font-semibold px-20 py-4"
            id="home"
          >
            <div ref={Titleref} className="flex">
              <a href="index.html">
                <h1 className="title text-[#E4E4E4] text-xl max-sm:text-lg">
                  _SK
                </h1>
              </a>
            </div>
            <ul
              ref={Listref}
              className="list flex gap-10 text-lg mt-1 max-sm:text-sm"
            >
              <li className="cursor-pointer text-[#E4E4E4]">WORKS</li>
              <li className="cursor-pointer text-[#E4E4E4]">ABOUT</li>
            </ul>
          </div>
        </div>

        <div className="hero-content flex pl-20 max-sm:pl-5 mt-36 font-bold text-center relative text-white">
          <h1
            ref={headingref}
            className="text-9xl cursor-default text-start max-sm:text-[12vw]"
          >
            DSIING OT DEVDPLEMEWT
          </h1>
        </div>
        <div className="hero-bottom text-white font-semibold pl-20 max-sm:pl-5 mt-10">
          <h3 ref={subheadingref} className="text-xl max-sm:text-[5vw]">
            LOREM IPSUM DOLOR
          </h3>
        </div>
        <div className="flex justify-between px-20 max-sm:px-4 pb-16 font-semibold max-sm:font-bold text-white text-sm">
          <h3 className="mt-8 max-sm:mt-56">DESIGN</h3>
          <h3 className="mt-8 max-sm:mt-56">AND</h3>
          <h3 className="mt-8 max-sm:mt-56">CODING</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
