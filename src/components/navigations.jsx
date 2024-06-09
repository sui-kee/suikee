import DownloadCvFrom from "./cvDowload";

export default function Navigations() {
  return (
    <ul className=" flex w-full justify-start uppercase p-3 gap-4 sticky z-[1000] top-3 left-0 right-0 text-gray-400 text-sm sm:text-xl">
      <li>
        <a href="#profile">About me</a>
      </li>
      <li>
        <a href="#skills">skills</a>
      </li>
      <li>
        <a href="#projects">projects</a>
      </li>
      <li>
        <a href="#contact">contact</a>
      </li>
      <li>
        <DownloadCvFrom />
      </li>
    </ul>
  );
}
