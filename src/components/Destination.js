import React from "react";
import Navbar from "./Navbar";
import data from "../data.json";
import moon from "../assets/destination/image-moon.png";

const Destination = () => {
  return (
    <div className="bg-destinationbg h-[100vh]">
      <Navbar />
      <h2 className="text-white uppercase pt-[10%] px-24">
        <span>01</span>
        pick your destination
      </h2>
      <div className="md:grid md:grid-cols-2 text-white pt-[2rem] px-24">
        <img className="md:w-1/2 md:block md:mx-auto" src={moon} alt="" />
        <div>
          <ul className="flex uppercase">
            <li className="dest-menu">moon</li>
            <li className="dest-menu mx-4">mars</li>
            <li className="dest-menu mr-4">europa</li>
            <li className="dest-menu">titan</li>
          </ul>
          <h2 className="text-white text-[4rem] uppercase">
            {data.destinations[0].name}
          </h2>
          <p>{data.destinations[0].description}</p>
          <hr />
          <div className="md:grid md:grid-cols-2">
            <div>
              <p>avg. distance</p>
              <p>{data.destinations[0].distance}</p>
            </div>
            <div>
              <p>est. travel time</p>
              <p>{data.destinations[0].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
