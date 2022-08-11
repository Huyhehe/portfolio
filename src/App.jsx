import { useEffect } from "react";
import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  document.title = "Portfolio";
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      const scrollTop = document.querySelector(".scroll-up");
      if (window.scrollY > 0) {
        header.classList.add("shadow");
        scrollTop.classList.remove("translate-x-[20rem]");
      } else {
        header.classList.remove("shadow");
        scrollTop.classList.add("translate-x-[20rem]");
      }
    });
  });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App relative min-h-[200vh]">
      <div className="header sticky top-0 w-full bg-bgPrimary z-50 transition-all">
        <Header />
      </div>
      <div className="body">
        <Body />
      </div>
      <div
        className="scroll-up fixed bottom-[2rem] right-[2rem] translate-x-[20rem] bg-slate-400 hover:bg-hoverColor rounded-full cursor-pointer transition-all duration-300"
        onClick={handleScrollTop}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: 40, color: "#ffffff" }} />
      </div>
    </div>
  );
}

export default App;
