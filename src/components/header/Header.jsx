import Navbar from "./components/Navbar";
// import SwitchButton from "./components/SwitchButton";

const Header = () => {
  return (
    <>
      <div className="header py-[2rem] mx-[5rem] flex justify-between items-center">
        <div className="logo">
          <span className="font-[900] text-[1.5rem] text-hoverColor">
            HUYDEV
          </span>
        </div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="switch">{/* <SwitchButton /> */}</div>
      </div>
    </>
  );
};

export default Header;
