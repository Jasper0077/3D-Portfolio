import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import cn from "classnames";

import { styles } from "../styles";
import EarthCanvas from "./canvas/Earth";
import SectionWrapper from "./Wrapper";
import { slideIn } from "../utils/motion";
import { Form } from "../models";

const Contact = () => {
    const [form, setForm] = React.useState<Form>({
        name: "",
        email: "",
        message: ""
    });
    const formRef = React.useRef<HTMLFormElement>(null);
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        emailjs
        .send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
            from_name: form.name,
            to_name: "Jasper Hwong",
            from_email: form.email,
            to_email: "jasperhwong@hotmail.com",
            message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
    
            setForm({
                name: "",
                email: "",
                message: "",
            });
            },
            (error) => {
            setLoading(false);
            console.error(error);
    
            alert("Ahh, something went wrong. Please try again.");
            }
        );
    }

    return (
        <div className={cn(
            "xl:mt-12 flex xl:flex-row",
            "flex-col-reverse flex gap-10 overflow-hidden"
        )}>
            <motion.div
                variants={slideIn({
                    direction: "left",
                    type: "tween",
                    delay: 0.2,
                    duration: 0.1
                })}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8 w-full"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Name:</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className={cn(
                                "bg-tertiary py-4 px-6",
                                "placeholder:text-secondary text-white",
                                "rouned-lg outline-none border-none font-medium"
                            )}
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Email:</span>
                        <input 
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className={cn(
                                "bg-tertiary py-4 px-6",
                                "placeholder:text-secondary text-white",
                                "rouned-lg outline-none border-none font-medium"
                            )}
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="leave your messages here..."
                            className={cn(
                                "bg-tertiary py-4 px-6",
                                "placeholder:text-secondary text-white",
                                "rouned-lg outline-none border-none font-medium"
                            )}
                        />
                    </label>

                    <button
                        type="submit"
                        className={cn(
                            "bg-tertiary py-3 px-8",
                            "outline-none w-fit tetx-white",
                            "font-bold shadow-md shadow-primary rounded-lg"
                        )}
                    >
                        {loading ? "Submiting..." : "Submit"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn({
                    direction: "right",
                    type: "tween",
                    delay: 0.2,
                    duration: 1
                })}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper("contact", Contact);