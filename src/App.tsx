import { Routes, Route } from "react-router-dom";
import { SpacesDashboard } from "./pages/spacesDashboard/spacesDashboard";
import { Summary } from "./pages/summary/summary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SpacesDashboard />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;