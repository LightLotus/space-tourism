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
    <div className="bg-crewbg md:h-[100vh] h-[200vh] bg-no-repeat w-[100vw] text-white relative">
      <div className="flex absolute bottom-[20%] px-24">
        <span
          className="block w-4 h-4 bg-white opacity-60 rounded-full onclick ease-in duration-300"
          onClick={handleCrewDoug}
        ></span>
        <span
          className="block mx-6 w-4 h-4 bg-white opacity-60 rounded-full onclick ease-in duration-300"
          onClick={handleCrewMark}
        ></span>
        <span
          className="block w-4 h-4 bg-white opacity-60 rounded-full onclick ease-in duration-300"
          onClick={handleCrewVictor}
        ></span>
        <span
          className="block ml-6 w-4 h-4 bg-white opacity-60 rounded-full onclick ease-in duration-300"
          onClick={handleCrewAnou}
        ></span>
      </div>
      <div className="grid grid-cols-2 relative">
        <div>
          <div className="flex uppercase md:pt-[10%] pt-[30%] md:px-24 px-8">
            <span className="text-[#505159] font-bold">02</span>
            <h2 className="ml-2">meet your crew</h2>
          </div>
          <div className="text-white md:px-24 px-8 md:mt-0 mt-[20%]">
            <div data-aos="fade-right">
              <p className="text-xl uppercase my-4">{crew.role}</p>
              <p className="uppercase my-4 text-6xl">{crew.name}</p>
              <p className="my-4 text-[#D0D6F9]">{crew.bio}</p>
            </div>
          </div>
        </div>
        <img
          src={crewimg}
          alt=""
          className="absolute right-[10%] top-0 w-[25%]"
        />
      </div>
    </div>
  );
};

export default Crew;
