import techdata from "../data.json";
import imgspacecapsule from "../assets/technology/image-space-capsule-portrait.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Techspacecapsule = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex items-center" data-aos="fade-left">
      <div className="w-1/2">
        <p>THE TERMINOLOGY…</p>
        <h2 className="text-4xl uppercase my-4">
          {techdata.technology[2].name}
        </h2>
        <p>{techdata.technology[2].description}</p>
      </div>
      <img className="block w-2/5 ml-24" src={imgspacecapsule} alt="" />
    </div>
  );
};

export default Techspacecapsule;
