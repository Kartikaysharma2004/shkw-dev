import React from "react";
import Bg1img from "../images/bg-1.png";
import Bg2img from "../images/bg-2.png";
import Bg3img from "../images/bg-3.png";
import Thumimg from "../images/thum-1.png";
import Thum2img from "../images/thum-2.png";
import Thum3img from "../images/thum-3.png";

const Page3 = () => {
  const bgimages = [
    {
      id: 1,
      img: Bg1img,
      title: "#case_01",
      project: "FURYU",
      description: "Brand site / Client work",
      thumbnail: Thumimg,
    },
    {
      id: 2,
      img: Bg2img,
      title: "#case_02",
      project: "PORTFOLIO",
      description: "Portfolio site / Private work",
      thumbnail: Thum2img,
    },
    {
      id: 3,
      img: Bg3img,
      title: "#case_03",
      project: "GREEN ENERGY",
      description: "Corporate site / Private work",
      thumbnail: Thum3img,
    },
  ];

  return (
    <div className="h-full w-full">
      {bgimages.map((bgimage) => (
        <div key={bgimage.id} className="sticky top-0 z-50 h-full w-full">
          {/* Background Image */}
          <img
            loading="lazy"
            className="h-full w-full max-sm:h-[35rem] object-cover"
            src={bgimage.img}
            alt={`Background for ${bgimage.project}`}
          />

          {/* Backdrop Blur */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>

          {/* Overlay Text Content */}
          <div className="absolute top-20 left-20 max-sm:top-5 max-sm:left-5 z-50">
            <h3 className="text-lg text-white max-sm:text-xs font-semibold">
              {bgimage.title}
            </h3>
          </div>
          <div className="absolute bottom-80 right-36 max-sm:bottom-5 max-sm:right-5 z-50 text-white">
            <h2 className="text-xl max-sm:text-sm font-bold">
              {bgimage.project}
            </h2>
            <h4 className="text-[1rem] max-sm:text-xs font-semibold">
              {bgimage.description}
            </h4>
            <h5 className="text-[1rem] pt-5 cursor-pointer max-sm:text-xs font-semibold">
              View More
            </h5>
          </div>

          {/* Center Thumbnail */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-[35vw] h-[31vw] max-sm:w-[91vw] bottom-12 max-sm:h-[101vw] max-sm:pt-12 cursor-pointer shadow-lg hover:scale-105 transition-all ease-in-out duration-300">
              <img
                className="h-full w-full object-cover"
                src={bgimage.thumbnail}
                alt={`Thumbnail for ${bgimage.project}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page3;
