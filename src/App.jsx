import { Routes, Route } from "react-router-dom";
import "./App.css";
import NewArticle from "./pages/NewArticle";
import Homepage from "./pages/Homepage";
import HomePage2 from "./Component/Homepage2";
import LiveMatches from "./Component/LiveMatches";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/news" element={<NewArticle />} />
      <Route path="/Homes" element={<HomePage2 />} />
      <Route path="/liveMatch" element={<LiveMatches />} />
    </Routes>
  );
}

export default App;
