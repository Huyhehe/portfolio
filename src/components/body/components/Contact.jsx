import FavoriteIcon from "@mui/icons-material/Favorite";
import { swirlingArrow } from "../../../assets/images";
import Title1 from "../../../components/reuseable/Title1";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material/";

const Contact = () => {
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
  let formItems = [
    {
      title: "Your Name",
      value: "",
    },
    {
      title: "Mail Address",
      value: "",
    },
    {
      title: "Content",
      value: "",
    },
  ];

  const handleIcon = (e) => {
    e.target.querySelector("a").click();
  };
  return (
    <>
      <div className="contact-wrapper py-[8rem]">
        <div className="contact-header flex flex-col gap-[1rem] text-[2rem] font-bold text-textPrimary jetbrain-mono items-center">
          <div className="flex justify-center items-center gap-[0.5rem] text-[2.5rem]">
            <div>
              <FavoriteIcon />
            </div>
            <h1>Thanks for visiting my website</h1>
            <div>
              <FavoriteIcon />
            </div>
          </div>
          <div className="flex">
            <h1>Contact to me?</h1>
            <div className="w-[5rem] -rotate-45">
              <img src={swirlingArrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="contact-main flex px-[20rem] justify-between">
          <div className="contact-info flex flex-col">
            <div className="info-privacy flex flex-col gap-[1.5rem] max-w-[35rem] py-[3rem]">
              <div>
                <Title1 title="+84919757480" configClassName="roboto-mono" />
              </div>
              <div>
                <Title1
                  title="thhyy2002@gmail.com"
                  configClassName="roboto-mono"
                />
              </div>
              <div>
                <Title1
                  title="Số 10 Bàu Vàng 4, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng."
                  configClassName="roboto-mono"
                />
              </div>
            </div>
            <div className="info-links">
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
            </div>
          </div>
          <div className="contact-form shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)] p-[5rem] min-w-[30rem] min-h-[30rem] rounded-md">
            <form
              className="flex flex-col items-center gap-[2rem] w-full h-full"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {formItems.map((item, index) => {
                return (
                  <div key={index} className="w-full">
                    <input
                      className=" outline-none border-b border-black py-[0.5rem] w-full bg-transparent"
                      type="text"
                      placeholder={item.title}
                    />
                  </div>
                );
              })}
              <input
                type="submit"
                className="mt-[2rem] border-[2px] border-black text-textPrimary w-fit cursor-pointer px-[2rem] py-[0.5rem] rounded-md hover:bg-black hover:text-white transition-all duration-200"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
