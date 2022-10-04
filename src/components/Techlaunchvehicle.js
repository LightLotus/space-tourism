import techdata from "../data.json";
import imglaunch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Techlaunchvehicle = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex items-center" data-aos="fade-left">
      <div className="w-1/2">
        <p>THE TERMINOLOGY…</p>
        <h2 className="text-4xl uppercase my-4">
          {techdata.technology[0].name}
        </h2>
        <p>{techdata.technology[0].description}</p>
      </div>
      <img className="block w-2/5 ml-24" src={imglaunch} alt="" />
    </div>
  );
};

export default Techlaunchvehicle;
