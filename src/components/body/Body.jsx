import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";

const Body = () => {
  return (
    <>
      <div className="home shadow-md">
        <Home />
      </div>
      <div className="about shadow-sm bg-bgSecondary">
        <About />
      </div>
      <div className="project shadow-md">
        <Project />
      </div>
      <div className="contact bg-bgSecondary">
        <Contact />
      </div>
    </>
  );
};

export default Body;
