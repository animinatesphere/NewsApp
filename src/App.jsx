import { Routes, Route } from "react-router-dom";
import "./App.css";
// import NewArticle from "./pages/NewArticle";
// import Homepage from "./pages/Homepage";
// import HomePage2 from "./Component/Homepage2";
import Usa from "./new-speech/Usa";
import China from "./new-speech/China";
import { Apple } from "./pages/Apple";
import Tesla from "./Component/Tesla";
import TechCrunch from "./Component/TechCrunch";
import India from "./new-speech/India";
import Nigeria from "./new-speech/Nigeria";
import Ukraine from "./new-speech/Ukraine";
import Japan from "./new-speech/Japan";
import Argentina from "./new-speech/Argentina";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />} /> */}

      <Route path="/" element={<Homepage />} />
      <Route path="/Usa" element={<Usa />} />
      <Route path="/China" element={<China />} />
      <Route path="/India" element={<India />} />
      <Route path="/Nigeria" element={<Nigeria />} />
      <Route path="/Ukraine" element={<Ukraine />} />
      <Route path="/Japan" element={<Japan />} />
      <Route path="/Argentina" element={<Argentina />} />
      <Route path="/Apple" element={<Apple />} />
      <Route path="/Tesla" element={<Tesla />} />
      <Route path="/TechCrunch" element={<TechCrunch />} />
    </Routes>
  );
}

export default App;
