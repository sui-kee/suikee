import { useAnimation, useInView, motion } from "framer-motion";
import {
  JSlibraries,
  authentication,
  languages,
  others,
  styling,
} from "../libs/skills";
import { useEffect, useRef } from "react";

export default function Skills() {
  const skills = [
    ...others,
    ...languages,
    ...JSlibraries,
    ...styling,
    ...authentication,
  ];
  return (
    <section
      id="skills"
      className=" pt-[140px] flex flex-col justify-center items-center p-3 bg-white"
    >
      <h2 className="text-4xl text-black font-extrabold">MY SKILLS</h2>
      <ul className="  flex justify-center items-center  p-2 flex-row gap-5 flex-wrap">
        {skills.map((item, index) => (
          <My_Skill img={item.image} key={index} index={index - 0.8} />
        ))}
      </ul>
    </section>
  );
}

function My_Skill({ img, index }) {
  const img_ref = useRef(null);
  const animation = useAnimation();
  const isInView = useInView(img_ref);
  useEffect(() => {
    if (isInView) {
      console.log("in view ..");
      animation.start({ scale: 1 });
    } else {
      console.log("not in view....");
      animation.start({ scale: 0 });
    }
  }, [isInView]);
  return (
    <motion.img
      initial={{ scale: 0.1 }}
      animate={animation}
      transition={{ duration: 2, type: "spring", delay: index - index * 0.85 }}
      ref={img_ref}
      src={img}
      className={" w-[70px] h-[70px] "}
    />
  );
}
