import { provides } from "../libs/provides";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MyProvides() {
  const textRef = useRef(null);
  const textAnimation = useAnimation();
  const isInView = useInView(textRef);
  const texts = "What you can expect from me".split(" ");
  useEffect(() => {
    if (isInView) {
      textAnimation.start({ opacity: 1 });
    } else {
      textAnimation.start({ opacity: 0 });
    }
  }, [isInView]);
  return (
    <section
      id="provides"
      className=" flex justify-center  items-center w-full gap-4 h-fit p-3 flex-col sm:flex-row flex-wrap"
    >
      <motion.div
        ref={textRef}
        className="w-full gap-4 flex justify-center items-center flex-wrap"
      >
        {texts.map((text, index) => (
          <motion.h2
            key={index}
            initial={{ opacity: 0 }}
            animate={textAnimation}
            transition={{ duration: 3, delay: index / 8 }}
            className=" text-[32px] sm:text-[40px] md:text-[70px] font-extrabold space-x-2 uppercase text-[#BFAEA8]"
          >
            {text}
          </motion.h2>
        ))}
      </motion.div>
      {provides.map((provide, index) => (
        <Provide key={index} provide={provide} timeIndex={index} />
      ))}
    </section>
  );
}

const Provide = ({ provide, timeIndex }) => {
  const ref = useRef(null);
  const animation = useAnimation();
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      animation.start({ x: 0 });
    } else {
      animation.start({ x: "100vw" });
    }
  }, [isInView]);
  return (
    <motion.div ref={ref}>
      <motion.article
        initial={{ x: "100vw" }}
        animate={animation}
        transition={{ duration: 3, type: "spring", delay: timeIndex / 8 }}
        className=" flex justify-start flex-col w-[250px] sm:w-[300px] p-3 items-center rounded-tl-3xl rounded-br-3xl bg-slate-200"
      >
        <img
          src={provide.image}
          width={180}
          height={180}
          alt="provides"
          className=" w-[150px] h-[150px]"
        />
        <h3 className="text-black text-sm sm:text-lg lg:text-2xl">
          {provide.name}
        </h3>
      </motion.article>
    </motion.div>
  );
};
