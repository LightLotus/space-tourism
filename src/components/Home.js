import "../css/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home p-10 h-[100vh]">
      <div className="grid grid-cols-2 mt-[10%]">
        <div className="pl-10">
          <p className="text-[#D0D6F9] uppercase">So, you want to travel to</p>
          <p className="text-white my-10 uppercase text-9xl">Space</p>
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
            className="inline-block text-center bg-white rounded-[50%] w-40 h-40 pt-16 uppercase absolute top-32 left-52"
          >
            explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
