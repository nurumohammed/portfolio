import { BsInfoCircleFill } from "react-icons/bs";
import { SkillsData } from "./utils";
import Page from "../../components/pageHeaderContent/page";
import { Animate } from "react-simple-animate";

const Skills = () => {
  return (
    <section id="skills">
      <Page headerText="My Skills " icon={<BsInfoCircleFill />} />
      <div className="p-5">
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
          <div className="flex flex-wrap -mx-2">
            {SkillsData.map((skillSection, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                <div className="p-2">
                  <h3 className="flex items-center p-4 gap-8">
                    {skillSection.label}
                  </h3>
                  {skillSection.data.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col">
                      <p className="flex">{skill.skillName}</p>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Skills;
