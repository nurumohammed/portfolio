
import { BsInfoCircleFill } from "react-icons/bs";
import Page from "../../components/pageHeaderContent/page";

const Data = {
  Experience: [
    {
      title: "Project Manager",
      description: "Creative Direction Project Management",
    },
    {
      title: "Senior Consultant",
      description: "Web Development, Database and Backend Development",
    },
     {
      title: "Managing Microsoft service",
      description: "Microsoft Azure and security  in APP factory accadamy",
    },
  ],
  Education: [
    {
      title: "University",
      description: "Wollo University",
    },
    {
      title: "Department",
      description: "Computer Science",
    },
        {
      title: "Web Development",
      description: "Wollo university APP-Factory Acadamy",
    },
  ],
};

const Resume = () => {
  return (
    <section id="Resume" className="">
      <Page headerText="My Resume" icon={<BsInfoCircleFill />} />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 p-2">
          <div className="">
            <h2 className="text-2xl font-bold mb-4 border-b-2">Experience</h2>
            <ul>
              {Data.Experience.map((item, index) => (
                <li key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2">Education</h2>
            <ul>
              {Data.Education.map((item, index) => (
                <li key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
