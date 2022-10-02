import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Destmoon from "./components/Destmoon";
import Destmars from "./components/Destmars";
import Deseuropa from "./components/Deseuropa";
import Desttitan from "./components/Desttitan";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          <Route path="/destination/moon" element={<Destmoon />} />
          <Route path="/destination/mars" element={<Destmars />} />
          <Route path="/destination/europa" element={<Deseuropa />} />
          <Route path="/destination/titan" element={<Desttitan />} />
        </Route>
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
