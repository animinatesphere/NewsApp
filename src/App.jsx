import { Routes, Route } from "react-router-dom";
import "./App.css";
// import NewArticle from "./pages/NewArticle";
// import Homepage from "./pages/Homepage";
import HomePage2 from "./Component/Homepage2";
import Usa from "./New-speech/usa";
import China from "./New-speech/China";
import { Apple } from "./pages/Apple";
import Tesla from "./Component/Tesla";
import TechCrunch from "./Component/TechCrunch";
import India from "./New-speech/India";
import Nigeria from "./New-speech/Nigeria";
import Ukraine from "./New-speech/Ukraine";
import Japan from "./New-speech/Japan";
import Argentina from "./New-speech/Argentina";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Homepage />} /> */}

      <Route path="/Homes" element={<HomePage2 />} />
      <Route path="/Usa-News" element={<Usa />} />
      <Route path="/China-News" element={<China />} />
      <Route path="/India-News" element={<India />} />
      <Route path="/Nigeria-News" element={<Nigeria />} />
      <Route path="/Ukraine-News" element={<Ukraine />} />
      <Route path="/Japan-News" element={<Japan />} />
      <Route path="/Argentina-News" element={<Argentina />} />
      <Route path="/Apple-News" element={<Apple />} />
      <Route path="/Tesla-News" element={<Tesla />} />
      <Route path="/TechCrunch-News" element={<TechCrunch />} />
    </Routes>
  );
}

export default App;
