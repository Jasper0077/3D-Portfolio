import React from "react";
import SectionWrapper from "./Wrapper";
import { BallCanvas } from "./canvas/Ball";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology, index) => {
                return (
                    <div className="w-28 h-28" key={index + technology.name}>
                        <BallCanvas key={index} icon={technology.icon} />
                    </div>
                )
            })}
        </div>
    )
}

export default SectionWrapper("technologies", Tech);