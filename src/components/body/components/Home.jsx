import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { avatar } from "../../../assets/images/index";
import Title1 from "../../reuseable/Title1";
import "../styles/styles.css";

import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material/";

const Home = () => {
  const titleClassName = "tracking-widest uppercase";
  const contacts = [
    {
      title: "facebook",
      img: Facebook,
      href: "https://www.facebook.com/hyyhyyhyyy/",
    },
    {
      title: "instagram",
      img: Instagram,
      href: "https://www.instagram.com/thanhhuy12_/",
    },
    {
      title: "twitter",
      img: Twitter,
      href: "https://twitter.com/huyhehe1712",
    },
    {
      title: "linkedin",
      img: LinkedIn,
      href: "https://www.linkedin.com/in/nguy%E1%BB%85n-huy-860798240/",
    },
  ];

  const handleIcon = (e) => {
    e.target.querySelector("a").click();
  };
  return (
    <>
      <div className="home-wrapper mx-[5rem] flex flex-col gap-[15rem] pb-[5rem]">
        <div className="top-container px-[10%] flex gap-[15rem] items-center">
          <div className="information flex flex-col gap-[5rem]">
            <div className="description flex flex-col gap-[1rem] pt-[10rem]">
              <Title1 configClassName={titleClassName} title="Hello" />
              <div className="title-name text-[3rem] text-textPrimary font-bold roboto-mono">
                <p>
                  I'm{" "}
                  <strong
                    className="font-bold text-hoverColor relative 
                  before:absolute before:content[''] before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-bgPrimary before:animate-typing
                  after:absolute after:content[''] after:top-0 after:left-0 after:bottom-0 after:right-0 after:w-[0.15rem] after:bg-black after:animate-blink"
                  >
                    Nguyễn Thành Huy
                  </strong>
                </p>
              </div>
              <div>
                <p className="text-textPrimary font-medium">
                  As know as an amateur Frontend Developer day by day trying
                  hard to be better.
                  <br />
                  For now i'm just a 3rd year student of{" "}
                  <a
                    href="http://dut.udn.vn/EN"
                    className="font-bold hover:text-[#3AB4F2] transition-all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    University of Science and Technology of Da Nang
                  </a>
                  <br />
                  still looking for an internship...
                  <br />
                  <br />
                  Wanna have a brief look about me?
                </p>
              </div>
            </div>
            <div className="button px-[2rem] py-[0.75rem] bg-hoverColor w-fit cursor-pointer flex items-center transition-all gap-[0.5rem] hover:gap-[1rem]">
              <span className="text-white tracking-wider font-bold uppercase">
                Take a look
              </span>
              <ArrowRightAltIcon sx={{ color: "#ffffff" }} />
            </div>
          </div>
          <div className="avatar">
            <div className="avatar-wrapper relative w-[300px] aspect-square shadow-md -rotate-[10deg] after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:aspect-square after:bg-hoverColor after:z-[-1] after:rounded-[1rem] after:-rotate-[20deg]">
              <img src={avatar} alt="avatar" className="rounded-[1rem]" />
            </div>
          </div>
        </div>
        <div className="bottom-container flex justify-between">
          <div className="contact-icon flex gap-8">
            {contacts.map((contact, index) => {
              const Icon = contact.img;
              return (
                <div
                  key={index}
                  onClick={(e) => handleIcon(e)}
                  className="cursor-pointer"
                >
                  <Icon className="pointer-events-none" />
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden"
                  >
                    a
                  </a>
                </div>
              );
            })}
          </div>
          <div className="point rotate-90 origin-bottom-right tracking-[10px]">
            <span>Scroll down</span>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
