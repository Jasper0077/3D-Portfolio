import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import SectionWrapper from "./Wrapper";

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>
                    My work
                </p>
                <h2 className={styles.sectionHeadText}>
                    Projects
                </h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn({ direction: "right", type: "spring", delay: 0, duration: 0.75})}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Follwing projects showcases my skills and knowledge through real-world examples of my work.
                    Each project is briefly described with links to code repositories.
                    It reflects my abilities to break complex problems into individual concrete use cases.
                </motion.p>
            </div>
            <div className="flex flex-row flex-wrap gap-5">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={project.name + index}
                            index={index}
                            project={project}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default SectionWrapper("works", Works);