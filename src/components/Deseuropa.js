import imgeuropa from "../assets/destination/image-europa.png";
import datamoon from "../data.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Deseuropa = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="text-white px-24 grid grid-cols-2 gap-4"
      data-aos="fade-right"
    >
      <img src={imgeuropa} alt="" className="w-1/2 block mx-auto" />
      <div>
        <h2 className="my-4 text-8xl uppercase">
          {datamoon.destinations[2].name}
        </h2>
        <p className="my-4">{datamoon.destinations[2].description}</p>
        <hr className="my-4" />
        <div className="uppercase grid grid-cols-2">
          <p>
            avg. distance
            <span className="block text-xl">
              {datamoon.destinations[2].distance}
            </span>
          </p>
          <p>
            est. travel time
            <span className="block text-xl">
              {datamoon.destinations[2].travel}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deseuropa;
