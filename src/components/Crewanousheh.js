import datacrew from "../data.json";
import imgano from "../assets/crew/image-anousheh-ansari.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Crewanousheh = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="text-white px-24 w-full grid grid-cols-2 gap-4">
      <div data-aos="fade-right">
        <p className="text-xl uppercase my-4">{datacrew.crew[3].role}</p>
        <p className="uppercase my-4 text-6xl">{datacrew.crew[3].name}</p>
        <p className="my-4">{datacrew.crew[3].bio}</p>
      </div>
      <img
        src={imgano}
        alt=""
        className="absolute bottom-0 right-32 w-[25%]"
      />
    </div>
  );
};

export default Crewanousheh;
