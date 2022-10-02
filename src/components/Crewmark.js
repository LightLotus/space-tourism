import datacrew from "../data.json";
import imgmark from "../assets/crew/image-mark-shuttleworth.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Crewmark = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="text-white px-24 w-full grid grid-cols-2 gap-4">
      <div data-aos="fade-right">
        <p className="text-xl uppercase my-4">{datacrew.crew[1].role}</p>
        <p className="uppercase my-4 text-6xl">{datacrew.crew[1].name}</p>
        <p className="my-4">{datacrew.crew[1].bio}</p>
      </div>
      <img
        data-aos="fade-left"
        src={imgmark}
        alt=""
        className="absolute bottom-0 right-32 w-[25%]"
      />
    </div>
  );
};

export default Crewmark;
