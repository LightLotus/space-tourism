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
import Crewdouglas from "./components/Crewdouglas";
import Crewmark from "./components/Crewmark";
import Crewvictor from "./components/Crewvictor";
import Crewanousheh from "./components/Crewanousheh";
import Techlaunchvehicle from "./components/Techlaunchvehicle";
import Techspaceport from "./components/Techspaceport";
import Techspacecapsule from "./components/Techspacecapsule";

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
        <Route path="/crew" element={<Crew />}>
          <Route path="/crew/douglas" element={<Crewdouglas />} />
          <Route path="/crew/mark" element={<Crewmark />} />
          <Route path="/crew/victor" element={<Crewvictor />} />
          <Route path="/crew/anousheh" element={<Crewanousheh />} />
        </Route>
        <Route path="/technology" element={<Technology />}>
          <Route
            path="/technology/launchvehicle"
            element={<Techlaunchvehicle />}
          />
          <Route path="/technology/spaceport" element={<Techspaceport />} />
          <Route path="/technology/spacecapsule" element={<Techspacecapsule />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
