
import { BsInfoCircleFill } from "react-icons/bs";
import Page from "../../components/pageHeaderContent/page";
import { Animate } from "react-simple-animate";
import { FaDatabase, FaDev } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";

const personalDetails = [
  {
    label: "Name",
    value: "Nuru Mohammed",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "Ethiopia",
  },
  {
    label: "Email",
    value: "meetnurumd5520@gmail.com",
  },
  {
    label: "Contact No",
    value: "+215 920-2196-04",
  },
];

const JobSummary =
  "Seasoned and independent Full Stack Developer with 3 years of experience, specializing in React and Node.js. I have a strong passion for creating responsive websites and delivering immersive user experiences. With expertise in both front-end and back-end development, I strive to blend the art of design with programming skills to create efficient and visually appealing web applications.";

const Portfolio = () => {
  const handleDownloadCV = () => {
    window.open("src/assets/cv.pdf", "_blank");
  };

  return (
    <section id="portfolio" className="h-full font-times-new-roman">
      <Page headerText="About Me" icon={<BsInfoCircleFill />} />
      <div className="text-start p-2 grid max-md:grid-cols-1 grid-cols-2 [1fr_auto]">
        <div className="p-2">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3 className="text-2xl font-times-new-roman text-lime-950">
              Full Stack Developer
            </h3>
            <p className="p-2 font-times-new-roman border-b border-dashed border-red-900 max-md:text-start">
              {JobSummary}
            </p>
          </Animate>
          <div className="">
            <Animate
              play
              duration={1.5}
              delay={0.3}
              start={{
                transform: "translateX(400px)",
              }}
              end={{
                transform: "translateY(0px)",
              }}
            >
              <h3 className="flex p- text-2xl font-times-new-roman  text-lime-950">
                Personal Information
              </h3>
              {personalDetails.map((detail, index) => (
                <div className="flex p-2 gap-4" key={index}>
                  <span className="font-semibold font-times-new-roman gap-2">
                    {detail.label}{" "}
                  </span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </Animate>
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleDownloadCV}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="text-lime-500 text-4xl">
          <div className="circle">
            <div className="icon-container">
              <FaDev className="icon -translate-y-[100px]" />
              <DiAndroid className="icon translate-x-[100px]" />
              <FaDatabase className="icon translate-y-[100px]" />
              <DiApple className="icon -translate-x-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
