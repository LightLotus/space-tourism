import "../css/technology.css";
import { Link, Outlet } from "react-router-dom";

const Technology = () => {
  return (
    <div className="technology h-[100vh] text-white">
      <h2 className="uppercase pt-[10%] px-24">
        <span>03</span>&emsp;space launch 101
      </h2>
      <div className="flex items-center">
        <ul className="px-24 my-4">
          <li className="my-4">
            <Link
              to="/technology/launchvehicle"
              className="w-12 h-12 text-center p-2 border border-white rounded-[50%] hover:text-black active:text-black focus:text-black hover:bg-white active:bg-white focus:bg-white duration-300 transition-all cursor-pointer block"
            >
              1
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="/technology/spaceport"
              className="w-12 h-12 text-center p-2 border border-white rounded-[50%] hover:text-black active:text-black focus:text-black hover:bg-white active:bg-white focus:bg-white duration-300 transition-all cursor-pointer block"
            >
              2
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="/technology/spacecapsule"
              className="w-12 h-12 text-center p-2 border border-white rounded-[50%] hover:text-black active:text-black focus:text-black hover:bg-white active:bg-white focus:bg-white duration-300 transition-all cursor-pointer block"
            >
              3
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Technology;
