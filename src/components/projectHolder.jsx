import yokeplay from "/yokeplay.png";
import yokeplaysm from "/yokeplaysm.jpg";
import gSong from "/g-song.png";
import gSongsm from "/g-songsm.jpg";
import jaja from "/jajaliken.png";
import jajasm from "/jajalikensm.jpg";

export default function ProjectHolder({ project, index }) {
  // project lis is for image optimization like placeholder="blur"
  const project_list = [
    {
      lg: yokeplay,
      sm: yokeplaysm,
    },
    {
      lg: gSong,
      sm: gSongsm,
    },
    {
      lg: jaja,
      sm: jajasm,
    },
  ];
  return (
    <section className=" flex flex-col bg-black border justify-start bg-none items-center w-full gap-3 rounded-md shadow-lg">
      <article className=" relative w-full min-h-fit p-2 flex flex-col gap-2 justify-end items-center rounded-md ">
        <img
          src={project_list[index].lg}
          alt="project"
          fill
          placeholder="blur"
          // width={700}
          // height={500}
          className=" w-full bg-top object-cover hidden sm:block rounded-md"
        />
        <img
          src={project_list[index].sm}
          alt="project"
          fill
          placeholder="blur" // width={700}
          // height={500}
          className=" w-full bg-top object-cover block sm:hidden"
        />
        <ul className=" w-full flex flex-row flex-wrap relative gap-2">
          {project.buildWith.map((name, index) => (
            <li
              key={index}
              className=" uppercase p-1 px-2 text-center text-[10px] md:text-sm bg-blue-600 text-white rounded-md"
            >
              {name}
            </li>
          ))}
        </ul>
      </article>
      <article
        className={` flex flex-col h-full w-full justify-start items-start rounded-md p-3 gap-3 text-[#A66D03]`}
      >
        <header
          className={`  flex justify-start items-center gap-2 text-lg lg:text-4xl uppercase text-slate-100 font-bold`}
        >
          <img
            src={project.image}
            alt="coverimage"
            width={100}
            height={100}
            className=" h-[50px] w-[50px]"
          />
          <h1>{project.name}</h1>
        </header>
        <a
          className=" text-lg italic text-blue-600 flex justify-start items-center gap-2"
          href={project.gitRepo}
          target="blank"
        >
          <img
            src={"/github.svg"}
            width={100}
            height={100}
            alt="git"
            className=" w-[30px] h-[30px]"
          />
          <h2>github repo link</h2>
        </a>
        <a
          className=" text-lg italic text-blue-600 flex justify-start items-center gap-2"
          href={project.link}
          target="blank"
        >
          <img
            src={"/link.svg"}
            width={100}
            height={100}
            alt="git"
            className=" w-[30px] h-[30px]"
          />
          <h2>app link</h2>
        </a>
        {/* <p className={`  text-lg md:text-xl font-extrabold`}>
          {project.description}
        </p> */}
      </article>
    </section>
  );
}
