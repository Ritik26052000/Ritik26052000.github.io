import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// import Nav from './Components/Navbar';
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Project from "./Components/Projects";
// import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import "./App.css";
import Nav from "./components/Navbar";
import MoveToTop from "./components/MoveToTop";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => setLoading(false), 1900);

    // Cleanup function to remove event listeners
    return () => clearTimeout();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader
            color={"#9067C6"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
