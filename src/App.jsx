import "./App.css";
import NavBar from "./components/NavBar";
// import MyAPi from "./components/MyAPi";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="font-Poppins container mx-auto">
      <BrowserRouter>
        <NavBar logoName="Online" />
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
