import "../css/technology.css";
import techdata from "../data.json";
import imglaunch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import imgspaceport from "../assets/technology/image-spaceport-portrait.jpg";
import imgspacecapsule from "../assets/technology/image-space-capsule-portrait.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const Technology = () => {
  const [tech, setTech] = useState(techdata.technology[0]);
  const [techimg, setTechImg] = useState(imglaunch);

  const handleClickLaunch = () => {
    setTech(techdata.technology[0]);
    setTechImg(imglaunch);
  };

  const handleClickSpacePort = () => {
    setTech(techdata.technology[1]);
    setTechImg(imgspaceport);
  };

  const handleClickSpaceCapsule = () => {
    setTech(techdata.technology[2]);
    setTechImg(imgspacecapsule);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="technology md:h-[100vh] text-white">
      <div className="md:pl-24 md:pt-0 pt-[30%] relative" data-aos="fade-left">
        <div className="uppercase md:pt-[10%] flex w-full justify-center md:justify-start">
          <span>03</span>
          <h2 className="ml-2">space launch 101</h2>
        </div>
        <img className="block md:hidden h-[50vh] w-full my-8" src={techimg} alt=""/>
        <div className="grid md:grid-cols-2 md:gap-[2rem] mt-[4rem] px-8">
          <div className="md:flex md:items-center">
            <ul className="md:block flex justify-center">
              <li
                className="w-12 h-12 border-white border-[1px] rounded-full flex items-center justify-center text-white tech-hover"
                onClick={handleClickLaunch}
              >
                1
              </li>
              <li
                className="w-12 h-12 border-white border-[1px] rounded-full flex items-center justify-center text-white tech-hover md:my-7 md:mx-0 mx-8"
                onClick={handleClickSpacePort}
              >
                2
              </li>
              <li
                className="w-12 h-12 border-white border-[1px] rounded-full flex items-center justify-center text-white tech-hover"
                onClick={handleClickSpaceCapsule}
              >
                3
              </li>
            </ul>
            <div className="w-full md:ml-[4rem] md:text-left text-center">
              <p className="mt-[2rem]">THE TERMINOLOGY…</p>
              <h2 className="text-4xl uppercase my-4">{tech.name}</h2>
              <p className="mb-[2rem]">{tech.description}</p>
            </div>
          </div>
          <img
            className="md:block w-3/4 h-[70vh] justify-self-end object-contain hidden"
            src={techimg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
