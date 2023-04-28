import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn } from "../utils/motion"; 
import SectionWrapper from "./Wrapper";
import cn from "classnames";

export interface ServiceCardProps {
    index: number;
    title: string;
    icon: string
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn({ direction: "right", type: "spring", delay: index * 0.5, duration: 0.75})}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />
        
                <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
                </h3>
            </div>
        </motion.div>
      </Tilt>
    )
}


const About = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p
                variants={fadeIn({
                    direction: "",
                    type: "",
                    delay: 0.1,
                    duration: 1
                })}
                className={cn(
                    "mt-4 text-secondary text-[17px]",
                    "max-w-3xl leading-[30px]"
                )}
            >
                I'm a mere developer, Typescript fanatic, Tailwindcss and Styled Component evangelist.
                An open source lover, where I read and write about open source project, share my experience with the public.
                During my day job as a full-stack developer, I enjoy coding while having some peppermint tea.
                I spend my free time reading, cooking, anime and exercise!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {
                    services.map((service, index) => {
                        return (
                            <ServiceCard key={service.title} index={index} {...service} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default SectionWrapper("about", About);