import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Techlaunchvehicle from "./components/Techlaunchvehicle";
import Techspaceport from "./components/Techspaceport";
import Techspacecapsule from "./components/Techspacecapsule";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />}>
          <Route
            path="/technology/launchvehicle"
            element={<Techlaunchvehicle />}
          />
          <Route path="/technology/spaceport" element={<Techspaceport />} />
          <Route
            path="/technology/spacecapsule"
            element={<Techspacecapsule />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
