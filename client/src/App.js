import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entry from "./components/Entry";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
