import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";

function App() {
  document.title = "Portfolio";

  return (
    <div className="App relative min-h-[200vh]">
      <div className="header sticky top-0 w-full bg-bgPrimary z-50">
        <Header />
      </div>
      <div className="body">
        <Body />
      </div>
    </div>
  );
}

export default App;
