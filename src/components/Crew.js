import "../css/crew.css";
import { Link, Outlet } from "react-router-dom";

const Crew = () => {
  return (
    <div className="crew h-[100vh] text-white">
      <h1 className="uppercase pt-[10%] px-24">
        <span>02</span>&emsp;meet your crew
      </h1>
      <Outlet />
      <ul className="px-24 absolute bottom-32 flex gap-4">
        <li>
          <Link
            to="/crew/douglas"
            className="w-4 h-4 border border-white rounded-[50%] hover:bg-white active:bg-white focus:bg-white duration-300 transition-all cursor-pointer block"
          ></Link>
        </li>
        <li>
          <Link
            to="/crew/mark"
            className="w-4 h-4 border border-white rounded-[50%] hover:bg-white active:bg-white focus:bg-white duration-300 transition-all cursor-pointer block"
          ></Link>
        </li>
        <li>
          <Link
            to="/crew/victor"
            className="w-4 h-4 border border-white rounded-[50%] hover:bg-white active:bg-white focus:bg-white duration-300 transition-all cursor-pointer block"
          ></Link>
        </li>
        <li>
          <Link
            to="/crew/anousheh"
            className="w-4 h-4 border border-white rounded-[50%] hover:bg-white active:bg-white focus:bg-white duration-300 transition-all cursor-pointer block"
          ></Link>
        </li>
      </ul>
    </div>
  );
};

export default Crew;
