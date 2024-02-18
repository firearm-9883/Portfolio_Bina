import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Test from "./container/Spinner";
import ProjectDetail from "./pages/ProjectDetail";
import Coffee from "./container/Coffee";
import ProjectCard from "./container/ProjectCard";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Conditionally render loading page or routes */}
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy-me-a-coffee" element={<Coffee />} />
            <Route path="/more-project" element={<ProjectCard />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
