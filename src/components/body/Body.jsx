import About from "./components/About";
import Home from "./components/Home";

const Body = () => {
  return (
    <>
      <div className="home shadow-md">
        <Home />
      </div>
      <div className="about shadow-sm bg-bgSecondary">
        <About />
      </div>
    </>
  );
};

export default Body;
