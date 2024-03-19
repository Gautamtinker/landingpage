import logo from "./logo.svg";
import "./App.css";
import Landingpage from "./Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
