import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import FormPage from "./pages/FormPage";
function App() {
  return (
    <div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Me</Link>
         <Link to="/form" style={styles.link}>Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}
const styles = {
  nav: {
    background: "grey",
    padding: "10px",
  },
  link: {
    color: "white",
    marginRight: "20px",
    fontSize: "18px"
  }
};
export default App;
