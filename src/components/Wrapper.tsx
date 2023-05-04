import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";

const SectionWrapper = <P extends object>(id: string, Component: React.ComponentType<P>): React.FC<P> => (props) => {
    if (!Component) return null;
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={id}>&nbsp;</span>
            <Component {...props as P}/>
        </motion.section>
    )
}

export default SectionWrapper;