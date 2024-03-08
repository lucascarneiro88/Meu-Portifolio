import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Info from "./pages/Info/Info.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Error from "./pages/Error/Error.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/info" element={<Info/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
