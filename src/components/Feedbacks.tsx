import { motion } from "framer-motion";
import { styles } from "../styles";

import SectionWrapper from "./Wrapper";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import cn from "classnames";
import FeedbackCard from "./FeedbackCard";

const Feedbacks = () => {
    return (
        <div className="mt-8 mx-0 bg-black-100 rounded-[20px]">
            <div className={cn(
                `${styles.padding}`,
                "bg-tertiary rounded-2xl min-h-[300px]"
            )}>
                <motion.div
                    variants={textVariant(0)}
                >
                    <p className={styles.sectionSubText}>Hear from the others</p>
                    <h2 className={styles.sectionHeadText}>Testimonials</h2>
                </motion.div>
            </div>
            <div className={cn(
                `${styles.paddingX}`,
                "-mt-20 pb-14 flex flex-wrap gap-7"
            )}>
                {testimonials.map((testimony, index) => {
                    return (
                        <FeedbackCard index={index} testimony={testimony} />
                    )
                })}
            </div>
        </div>
    )
}

export default SectionWrapper("feedbacks", Feedbacks);