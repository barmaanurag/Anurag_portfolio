import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div 
          className="w-28 h-32 flex flex-col items-center justify-center animate-float text-center"
          key={technology.name}
          style={{ animationDelay: `${index * 0.2}s` }} // Staggered floating effect
        >
          <img src={technology.icon} alt={technology.name} className="w-20 h-20 object-contain" />
          <p className="mt-2 text-white text-sm font-semibold">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
