import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Feed from "./pages/Feed";

function App() {
  return (
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
       <Route path="/feed" element={<Feed />} />
      </Routes>
   
  );
}

export default App;
