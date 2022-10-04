import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-full text-white justify-between items-center p-10 fixed top-0 left-0 uppercase">
      <Link to="/">
        <img src={logo} alt="" className="block w-10" />
      </Link>
      <ul className="flex bg-white/10 backdrop-blur-lg py-5 pr-10 right-0 absolute w-1/2">
        <li className="mx-4">
          <Link to="/">
            <span>00 </span>home
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/destination">
            <span>01 </span>destination
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/crew">
            <span>02 </span>crew
          </Link>
        </li>
        <li className="mx-4">
          <Link to="/technology">
            <span>03 </span>technology
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
