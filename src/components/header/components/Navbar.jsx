const Navbar = () => {
  const links = [
    {
      title: "home",
    },
    {
      title: "about",
    },
    {
      title: "service",
    },
    {
      title: "service",
    },
    {
      title: "service",
    },
  ];

  return (
    <>
      <div className="navbar-wrapper flex gap-[3rem]">
        {links.map((item, index) => {
          return (
            <div key={index}>
              <span className="uppercase font-bold tracking-widest text-textSecondary hover:text-hoverColor transition-all cursor-pointer">
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
