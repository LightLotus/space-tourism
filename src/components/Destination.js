import "../css/destination.css";
import { Link, Outlet } from "react-router-dom";

const Destination = () => {
  return (
    <div className="destination h-[100vh] text-white pt-[10%]">
      <div className="grid grid-cols-2 gap-4 px-16">
        <h1 className="uppercase">
          <span>01</span>&emsp;Pick Up Your Destination
        </h1>
        <ul className="flex mt-24 uppercase">
          <li className="mr-4">
            <Link to="/destination/moon">moon</Link>
          </li>
          <li className="mx-4">
            <Link to="/destination/mars">mars</Link>
          </li>
          <li className="mx-4">
            <Link to="/destination/europa">europa</Link>
          </li>
          <li className="mx-4">
            <Link to="/destination/titan">titan</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Destination;
