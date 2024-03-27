import { useEffect, useRef } from "react";
import { projects } from "../libs/projects";
import ProjectHolder from "./projectHolder";
import { motion, useAnimation, useInView } from "framer-motion";
export default function Projects() {
  return (
    <main className="bg-black relative">
      <h3 className=" w-full p-4 text-start  text-7xl text-white space-x-5 uppercase">
        My top projects
      </h3>
      <section
        id="projects"
        className=" grid relative grid-cols-2  lg:grid-cols-3 items-start w-full h-full md:overflow-auto gap-4 p-3"
      >
        {/* Yoke play */}
        {projects.map((project, index) => (
          <ProjectHolder project={project} key={index} index={index} />
        ))}
      </section>
      <ProjectHover />
    </main>
  );
}

function ProjectHover() {
  const hoverRef = useRef(null);
  const animation = useAnimation();
  const isInview = useInView(hoverRef);
  useEffect(() => {
    if (isInview) {
      animation.start({ width: "0%", height: "100%" });
    }
    if (!isInview) {
      animation.start({ width: "100%", height: "100%" });
    }
  });
  return (
    <motion.div
      ref={hoverRef}
      initial={{ height: "100%" }}
      animate={animation}
      transition={{ duration: 2.5 }}
      className=" absolute  uppercase space-x-4 font-extrabold top-0 right-0 h-full bg-white flex justify-center items-center text-black"
    ></motion.div>
  );
}
