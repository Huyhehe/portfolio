import "../styles/styles.css";

const Navbar = () => {
  const links = [
    {
      title: "home",
    },
    {
      title: "about",
    },
    {
      title: "project",
    },
    {
      title: "contact",
    },
  ];

  const handleScrollToElement = (el) => {
    const element = document.querySelector(`.${el}`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="navbar-wrapper flex gap-[3rem]">
        {links.map((item, index) => {
          return (
            <div
              className="navbar-item relative group cursor-pointer"
              key={index}
              onClick={() => handleScrollToElement(item.title)}
            >
              <span className="group-hover:text-hoverColor uppercase font-bold tracking-widest text-textSecondary transition-all">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
