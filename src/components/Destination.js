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
    <div className="bg-destinationbg md:h-[100vh]">
      {data.destinations.map((dest) => {
        <h1 className="text-white mt-[20%] mx-auto">{dest.name}</h1>;
      })}
      <div className="text-white uppercase pt-[30%] md:pt-[10%] md:px-24 px-8 flex items-center w-[100%]">
        <span className="text-[#505159] font-bold">01</span>
        <h2>&emsp; pick your destination</h2>
      </div>
      <div className="md:grid md:grid-cols-2 text-white pt-[2rem] md:px-24">
        <img
          className="md:w-1/2 block mx-auto self-center w-3/5"
          src={image}
          alt=""
        />
        <div>
          <ul className="flex uppercase md:justify-start justify-center md:mt-0 mt-16 mb-6">
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
          <h2 className="text-white text-[4rem] uppercase my-6 md:text-left text-center">{dest.name}</h2>
          <p className="text-center md:text-left px-8 md:px-0">{dest.description}</p>
          <hr className="block mt-8 mb-4 mx-8 md:mx-0" />
          <div className="md:grid md:grid-cols-2 md:text-left text-center uppercase">
            <div>
              <p>avg. distance</p>
              <p className="text-[1.5rem]">{dest.distance}</p>
            </div>
            <div className="py-8 md:py-0">
              <p>est. travel time</p>
              <p className="text-[1.5rem]">{dest.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
