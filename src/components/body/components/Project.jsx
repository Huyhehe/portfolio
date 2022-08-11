import { guitarshop, lasles, due, twitter } from "../../../assets/images/index";

const Project = () => {
  const projects = [
    {
      title: "Guitar Shop Management Website",
      description:
        "This project was built for a guitar shop to manage employees and commodities easier and can cut down the manage-fee. Actually my team used VueJS(V2) for frontend and .NET CORE for backend. This website's just a private website for specific guitar shop that using it for management, then may be you can not register for using",
      cover: guitarshop,
      href: "https://pbl-3-dcur38hyc-huyhehe.vercel.app/login",
      since: "May 2022 - July 2022",
    },
    {
      title: "CV Sample",
      description:
        "This one just an HTML&CSS cut from random figma project on Figma Community",
      cover: due,
      href: "https://huyhehe.github.io/landing-page/",
      since: "Within one day - July 22 2022",
    },
    {
      title: "Lasles VPN",
      description:
        "This one is the first project of mine with HTML&CSS, cut from random figma project on Figma Community",
      cover: lasles,
      href: "https://huyhehe.github.io/figma1/",
      since: "October 2021 - November 2021",
    },
    {
      title: "Clone Twitter",
      description:
        "This project clone from Twitter about UI UX and some basic CRUD working behind, for now this project still on development",
      cover: twitter,
      href: "http://twitter-clone-huyhehe.surge.sh/",
      since: "July 2022 - Recently",
    },
  ];
  return (
    <>
      <div className="project-wrapper flex flex-col items-center py-[7rem]">
        <div className="flex flex-col gap-[0.75rem] items-center text-textPrimary mb-[3rem]">
          <h1 className="w-fit text-[3rem] font-bold roboto-mono">
            My projects
          </h1>
          <p className="text-[1.25rem] text-textSecondary font-medium italic">
            These projects down below are the results of my frontend studying
            through 1 year
          </p>
        </div>
        <div className="project-list-container">
          <div className="project-list grid grid-cols-2 gap-x-[5rem] gap-y-[2rem]">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-md"
                >
                  <div className="cover relative w-[30rem] group-hover:blur-sm transition-all rounded-md">
                    <img
                      className="rounded-md"
                      src={project.cover}
                      alt={project.title}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-0 bg-white group-hover:opacity-20 transition-all"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 group-hover:-translate-y-1/2 w-full h-full transition-all group-hover:delay-300 duration-300 bg-bgSecondary rounded-md flex flex-col gap-[1rem] p-[2rem] font-bold text-textPrimary overflow-auto">
                    <span className=" text-textSecondary">{project.since}</span>
                    <span className="text-[1.5rem]">{project.title}</span>
                    <p className="text-[0.85rem] font-medium">
                      {project.description}
                    </p>
                    <a
                      className="self-center border-[2px] rounded-md px-[1rem] py-[0.25rem] border-hoverColor hover:bg-hoverColor hover:text-white transition-all duration-200"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
