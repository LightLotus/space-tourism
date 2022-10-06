import imgmoon from "../assets/destination/image-moon.png";
import datamoon from "../data.json";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Destmoon = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="text-white text-center md:text-left px-6 md:px-24 grid md:grid-cols-2 gap-4"
      data-aos="fade-right"
    >
      <img src={imgmoon} alt="" className="w-1/2 block mx-auto my-10 md:mt-0" />
      <div>
        <h2 className="my-4 text-8xl uppercase">Moon</h2>
        <p className="my-4">{datamoon.destinations[0].description}</p>
        <hr className="my-10" />
        <div className="uppercase grid md:grid-cols-2">
          <p>
            avg. distance
            <span className="block text-xl">
              {datamoon.destinations[0].distance}
            </span>
          </p>
          <p className="mt-10 md:mt-0">
            est. travel time
            <span className="block text-xl">
              {datamoon.destinations[0].travel}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destmoon;
