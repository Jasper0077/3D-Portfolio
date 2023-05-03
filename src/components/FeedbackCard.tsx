import cn from "classnames";
import { testimonials } from "constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

interface Props {
    index: number;
    testimony: typeof testimonials[number];
}

const FeedbackCard = ({ index, testimony }: Props) => {
    return (
        <motion.div
            variants={fadeIn({ 
                direction: "up",
                type: "spring", 
                delay: index * 0.5, 
                duration: 0.75
            })}
            key={index + testimony.name}
            className={cn(
                "bg-black-200 rounded-lg",
                "p-10 xs:w-[320px] w-full"
            )}
        >
            <h1 className="text-[48px] text-white">"</h1>
            <p className="text-[18px] mt-1">{testimony.testimonial}</p>
            <div className="mt-7 flex flex-row items-start justify-between">
                <div className="flex flex-col items-baseline justify-start gap-1/2">
                    <p className="text-sm text-gray-200">
                        <span className="text-blue-400">@&nbsp;</span>
                        {testimony.name}
                    </p>
                    <p className="text-xs text-gray-400">{testimony.designation} ({testimony.company})</p>
                </div>
                <img
                    className="w-[48px] h-[48px] object-cover rounded-[999px]"
                    src={testimony.image}
                    alt={`feedback from ${testimony.name}`}
                />
            </div>
        </motion.div>
    )
}

export default FeedbackCard;