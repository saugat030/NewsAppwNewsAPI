import "./App.css";
import NavBar from "./components/NavBar";
import { Slideshow } from "./components/Slideshow";
// import MyAPi from "./components/MyAPi";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsGrid from "./components/NewsGrid";
import DontMiss from "./components/DontMiss";
import Highlights from "./components/Highlights";
function App() {
  return (
    <div className="font-Poppins container mx-auto">
      <BrowserRouter>
        <NavBar logoName="Online" />
        <NewsGrid />
        <div className="flex w-full justify-between gap-10">
          <DontMiss />
          <Highlights />
        </div>
        <Slideshow />
        <Routes>
          <Route exact path="/" element={<HomePage topic="news" />}></Route>
          <Route
            path="/politics"
            element={<HomePage topic="politics" />}
          ></Route>
          <Route path="/sports" element={<HomePage topic="sports" />}></Route>
          <Route path="/bitcoin" element={<HomePage topic="bitcoin" />}></Route>
          <Route
            path="/sports/football"
            element={<HomePage topic="football" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
