import "../css/home.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="home p-10 h-[100vh] -z-10">
      <div className="grid text-center md:text-left w-full md:grid-cols-2 mt-[10%]">
        <div className="md:pl-10" data-aos="fade-right">
          <p className="text-[#D0D6F9] uppercase mt-10">So, you want to travel to</p>
          <p className="text-white my-5 md:my-10 uppercase text-6xl md:text-9xl">Space</p>
          <p className="text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="relative">
          <Link
            to="/destination"
            className="inline-block text-center my-10 bg-white rounded-[50%] w-40 h-40 pt-16 uppercase md:absolute top-32 left-52 hover:outline hover:outline-[2.5rem] hover:outline-[#ffffff46] transition-all duration-300 ease-in-out z-[-1]"
          >
            explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;