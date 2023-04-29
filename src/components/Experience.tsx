import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "./Wrapper";
import { textVariant } from "../utils/motion";

interface ExperienceCardProps {
    experience: typeof experiences[number];
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const {title, company_name, icon, iconBg, date, points } = experience;
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1D1836", color: "#FFFF" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={date}
            iconStyle={{ background: iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img 
                        src={icon}
                        alt={company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{title}</h3>
                <p className="text-secondary text-[16px] font-semibold m-0">{company_name}</p>
            </div>

            <ul className="mt-5 list-dics ml-5 space-y-2">
                {points.map((point, index) => {
                    return (
                        <li
                            key={index}
                            className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                            {point}
                        </li>
                    )
                })}
            </ul>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>what I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => {
                        return (
                            <ExperienceCard key={index} experience={experience} />
                        )
                    })}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper("experience", Experience);