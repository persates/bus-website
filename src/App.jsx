import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomeContainer from "./pages/home_container/HomeContainer";
import Bus from "./pages/bus/Bus";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/bus" element={<Bus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
