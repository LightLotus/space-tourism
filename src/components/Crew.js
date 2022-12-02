import "../css/crew.css";
import datacrew from "../data.json";
import imgdoug from "../assets/crew/image-douglas-hurley.png";
import imgmark from "../assets/crew/image-mark-shuttleworth.png";
import imgvictor from "../assets/crew/image-victor-glover.png";
import imganousheh from "../assets/crew/image-anousheh-ansari.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const Crew = () => {
  const [crew, setCrew] = useState(datacrew.crew[0]);
  const [crewimg, setCrewImg] = useState(imgdoug);

  const handleCrewDoug = () => {
    setCrew(datacrew.crew[0]);
    setCrewImg(imgdoug);
  };

  const handleCrewMark = () => {
    setCrew(datacrew.crew[1]);
    setCrewImg(imgmark);
  };

  const handleCrewVictor = () => {
    setCrew(datacrew.crew[2]);
    setCrewImg(imgvictor);
  };

  const handleCrewAnou = () => {
    setCrew(datacrew.crew[3]);
    setCrewImg(imganousheh);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-crewbg bg-no-repeat w-[100vw] text-white relative py-8 md:h-[100vh]">
      <div className="uppercase text-center md:text-left md:px-24 mt-[20%] md:mt-32">
        <span>02</span>
        <span className="inline-block ml-2">meet your crew</span>
      </div>
      <ul className="flex justify-center absolute top-[50%] md:top-[80%] left-[50%] md:left-24 translate-x-[-50%]  md:translate-x-[0] z-40">
        <span
          className="block w-5 h-5 bg-white rounded-full onclick"
          onClick={handleCrewDoug}
        ></span>
        <span
          className="block w-5 h-5 bg-white rounded-full mx-4 onclick"
          onClick={handleCrewMark}
        ></span>
        <span
          className="block w-5 h-5 bg-white rounded-full onclick"
          onClick={handleCrewVictor}
        ></span>
        <span
          className="block w-5 h-5 bg-white rounded-full ml-4 onclick"
          onClick={handleCrewAnou}
        ></span>
      </ul>
      <div className="md:pt-20 md:grid md:grid-cols-2 md:px-24 md:gap-[4rem]">
        <div className="p-8 uppercase col-start-2 col-end-3">
          <img className="block w-1/2 mx-auto md:w-[20%] md:absolute md:bottom-0" src={crewimg} />
          <hr className="md:hidden" />
        </div>
        <div className="mt-[6rem] md:mt-0 text-center md:text-left px-8 md:px-0 col-start-1 col-end-2 row-start-1 row-end-2" data-aos="fade-left">
          <p className="uppercase">{crew.role}</p>
          <h2 className="uppercase text-4xl my-4">{crew.name}</h2>
          <p className="py-8">{crew.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
