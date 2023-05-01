import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { github } from "../assets";

interface Props {
    index: number;
    project: typeof projects[number];
}

const ProjectCard = ({ index, project }: Props) => {
    const { name, description, image, tags, source_code_link } = project;
    return (
        <motion.div variants={fadeIn({ direction: "up", type: "spring", delay: index / 2, duration: 0.75})}>
            <Tilt
                className="bg-tertiary rounded-2xl sm:w-[360px] w-full h-max p-5"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 car-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img 
                                src={github}
                                alt={"github"}
                                className="w-1/2 h-1/2 object-contain hover:scale-125"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 overflow-clip h-[240px]">
                    <h3 className="text-lg">{name}</h3>
                    <p className="text-sm mt-4">{description}</p>
                </div>
                <div className="mt-4 flex flex-row flex-wrap justify-start items-center gap-1.5">
                    {tags.map((tag, index) => {
                        return (
                            <p key={tag.name + index} className={`${tag.color} text-xs`}>{`#${tag.name}`}</p>
                        )
                    })}
                </div>
            </Tilt>
        </motion.div>
    )
};

export default ProjectCard;