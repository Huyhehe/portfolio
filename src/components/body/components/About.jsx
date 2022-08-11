import { shiba, signature } from "../../../assets/images";
import Title1 from "../../reuseable/Title1";

const About = () => {
  const skills = [
    {
      title: "HTML&CSS",
      progress: "80%",
    },
    {
      title: "Javascript",
      progress: "70%",
    },
    {
      title: "ReactJS",
      progress: "80%",
    },
    {
      title: "Redux",
      progress: "60%",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-[4rem] py-[10rem] items-center">
        <div className="container px-[10%]">
          <div className="about-info flex gap-[2rem] justify-between">
            <div className="about-info-left">
              <div className="shiba-box w-[400px] aspect-square">
                <img src={shiba} alt="shiba" />
              </div>
            </div>
            <div className="about-info-right w-[40rem] flex flex-col justify-between">
              <div className="about-info-right-top flex flex-col gap-[2rem] font-medium text-textPrimary">
                <div>
                  <Title1
                    title="About me"
                    configClassName="text-[2rem] font-black"
                  />
                </div>
                <div>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint aspernatur eos dolorem voluptatibus harum a alias
                    architecto earum temporibus fuga laborum, perspiciatis
                    libero aperiam rem dolorum, porro id laboriosam. Tempore.
                  </p>
                </div>
                <div>
                  <p>
                    People will never know who you are till you did an
                    incredible thing!
                  </p>
                </div>
              </div>
              <div className="about-info-right-bottom flex flex-col gap-[1rem]">
                <div>
                  <img src={signature} alt="signature" />
                </div>
                <div>
                  <div className="bg-hoverColor text-white px-[3rem] py-[0.75rem] w-fit font-bold cursor-pointer">
                    Hire me
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-skills min-h-[17rem] flex relative">
            <div className="about-skills-title -rotate-90 origin-center absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
              <div className="">
                <Title1
                  title="My Skills"
                  configClassName="text-[2rem] tracking-wider"
                />
              </div>
            </div>
            <div className="about-skills-main grow px-[5rem] items-center grid grid-cols-2 gap-x-[5rem]">
              {skills.map((skill, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[1rem]">
                    <div className="flex justify-between font-bold text-textPrimary">
                      <span className="">{skill.title}</span>
                      <span className="px-[1rem]">{skill.progress}</span>
                    </div>
                    <div
                      style={{ "--progress-width": `${skill.progress}` }}
                      className="skill-progress h-[0.75rem] bg-bgPrimary rounded-full  relative after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:rounded-full after:bg-textPrimary"
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
