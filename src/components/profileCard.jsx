import { useEffect, useRef } from "react";
import Curves from "./curves";
import { useAnimation, useInView, motion } from "framer-motion";

export default function ProfileCard() {
  const textRef = useRef(null);
  const textAnimation = useAnimation();
  const isInView = useInView(textRef);
  const paragraph = `I create innovative websites with cutting-edge features.I prioritize
  user-centric design to ensure a seamless and enjoyable experience.I
  develop dynamic and interactive websites that engage users and my
  websites are responsive, ensuring optimal viewing on various
  devices.`;
  const texts = paragraph.split(" ");
  useEffect(() => {
    if (isInView) {
      textAnimation.start({ opacity: 1 });
    } else {
      textAnimation.start({ opacity: 0 });
    }
  }, [isInView]);
  return (
    <section
      id="profile"
      className=" flex relative justify-center items-center w-[100vw] h-fit gap-4  flex-col pb-[140px] "
    >
      <article className=" flex flex-col md:flex-row mt-2 justify-center gap-3 p-5 md:p-12 items-center w-[90vw] sm:max-w-[94vw] lg:max-w-[80vw]">
        <img
          width={400}
          height={400}
          alt="profile"
          src={"suikeeprofile.jpg"}
          className=" w-[190px] h-[190px] sm:w-[280px] sm:h-[280px] lg:w-[330px] lg:h-[330px] rounded-md p-2 lg:p-4 "
        />
        <footer className=" flex justify-start flex-col">
          <h2
            ref={textRef}
            className={`  text-lg sm:text-xl lg:text-4xl uppercase text-[#BFAEA8] font-bold max-w-[70vw]`}
          >
            Hello, I'm Ling Kee
          </h2>
          <p className=" flex gap-1 justify-start flex-wrap uppercase">
            {texts.map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={textAnimation}
                transition={{ duration: 1.3, delay: index / 8 }}
                className={` text-[#BFAEA8] text-lg sm:text-xl`}
              >
                {text}
              </motion.span>
            ))}
          </p>
          <div className=" flex justify-start pt-3">
            <button
              href={"me"}
              className=" px-7 py-2 w-fit rounded-lg text-white bg-[#732020] hover:bg-pink-700"
            >
              Hire me
            </button>
          </div>
        </footer>
      </article>
      <Curves />
    </section>
  );
}
