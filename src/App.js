import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import DataEntry from "./pages/DataEntry";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    bio: "",
    profilePicture: "",
    skills: "",
    interests: "",
    detailedDescription: "",
    title: "",
    description: "",
    picture: "",
    gitHubLink: "",
    socialMedia: [
      {
        platform0: "",
        url0: "",
      },
    ],
  });

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) setData(profile);
  }, [])

  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="container py-3">
      <Routes>
        <Route path="/" element={<AboutMe data={data} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data-entry" element={<DataEntry data={data} setData={setData} />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
