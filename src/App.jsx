// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Holidays from "./pages/Holidays";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-grow" style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/shift" element={<MainPage />} />
              <Route path="/holidays" element={<Holidays />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
