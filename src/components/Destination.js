import React from "react";
import Navbar from "./Navbar";
import data from "../data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { useState } from "react";

const Destination = () => {
  const [dest, setDest] = useState(data.destinations[0]);
  const [image, setImage] = useState(moon);

  const handleDestMoon = () => {
    setDest(data.destinations[0]);
    setImage(moon);
  };

  const handleDestMars = () => {
    setDest(data.destinations[1]);
    setImage(mars);
  };

  const handleDestEuropa = () => {
    setDest(data.destinations[2]);
    setImage(europa);
  };

  const handleDestTitan = () => {
    setDest(data.destinations[3]);
    setImage(titan);
  };

  return (
    <div className="bg-destinationbg h-[100vh]">
      {data.destinations.map((dest) => {
        <h1 className="text-white mt-[20%] mx-auto">{dest.name}</h1>;
      })}

      <Navbar />
      <h2 className="text-white uppercase pt-[10%] px-24">
        <span>01</span>
        pick your destination
      </h2>
      <div className="md:grid md:grid-cols-2 text-white pt-[2rem] px-24">
        <img className="md:w-1/2 md:block md:mx-auto self-center" src={image} alt="" />
        <div>
          <ul className="flex uppercase">
            <li className="cursor-pointer dest-menu" onClick={handleDestMoon}>
              moon
            </li>
            <li
              className="cursor-pointer dest-menu mx-4"
              onClick={handleDestMars}
            >
              mars
            </li>
            <li
              className="cursor-pointer dest-menu mr-4"
              onClick={handleDestEuropa}
            >
              europa
            </li>
            <li className="cursor-pointer dest-menu" onClick={handleDestTitan}>
              titan
            </li>
          </ul>
          <h2 className="text-white text-[4rem] uppercase my-6">{dest.name}</h2>
          <p>{dest.description}</p>
          <hr className="block mt-8 mb-4"/>
          <div className="md:grid md:grid-cols-2">
            <div>
              <p>avg. distance</p>
              <p>{dest.distance}</p>
            </div>
            <div>
              <p>est. travel time</p>
              <p>{dest.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
