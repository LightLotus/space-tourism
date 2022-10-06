import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex w-full text-white justify-between items-center p-10 fixed top-0 left-0 uppercase">
        <Link to="/">
          <img src={logo} alt="" className="block w-10" />
        </Link>
        <ul className="md:flex bg-white/10 backdrop-blur-lg py-5 pr-10 right-0 absolute w-1/2 hidden">
          <li className="mx-4">
            <Link className="navbar" to="/">
              <span>00 </span>home
            </Link>
          </li>
          <li className="mx-4">
            <Link className="navbar" to="/destination">
              <span>01 </span>destination
            </Link>
          </li>
          <li className="mx-4">
            <Link className="navbar" to="/crew">
              <span>02 </span>crew
            </Link>
          </li>
          <li className="mx-4">
            <Link className="navbar" to="/technology">
              <span>03 </span>technology
            </Link>
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="text-white md:hidden z-[999]"
        >
          {!nav ? (
            <FontAwesomeIcon
              className="text-3xl"
              icon={faBars}
            />
          ) : (
            <FontAwesomeIcon
              className="text-3xl"
              icon={faClose}
            />
          )}
        </div>
        <ul
          className={
            nav
              ? "flex flex-col z-[50] h-full w-3/4 fixed top-0 right-0 backdrop-blur-lg md:hidden transition-all duration-300"
              : "fixed right-[-100%]"
          }
        >
          <li className="py-4 px-10 mt-20">
            <Link onClick={handleNav} to="/">
              <span>00 </span>home
            </Link>
          </li>
          <li className="py-4 px-10">
            <Link onClick={handleNav} to="/destination">
              <span>01 </span>destination
            </Link>
          </li>
          <li className="py-4 px-10">
            <Link onClick={handleNav} to="/crew">
              <span>02 </span>crew
            </Link>
          </li>
          <li className="py-4 px-10">
            <Link onClick={handleNav} to="/technology">
              <span>03 </span>technology
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
