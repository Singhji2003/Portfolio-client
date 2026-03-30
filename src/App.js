import { ToastContainer } from "react-toastify";
import "./App.css";
import "./Responsive.css";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <AboutUs />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};
export default App;
