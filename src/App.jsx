import Home from "./containers/home/home.jsx";
import Aboute from "./containers/aboute/aboute.jsx";
import { Routes, Route } from "react-router-dom";
import Resume from "./containers/resume/resume.jsx";
import Skills from "./containers/skills/skills.jsx"
import Contact from "./containers/contact/contact.jsx";
import NavBar from './components/navBar/navbar.jsx'
const App = () => {
  return (
    <div className="text-center">
      {/* particles */}
      {/* navbar */}
      <NavBar />
      {/* mainpage content */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/aboute" element={<Aboute />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
