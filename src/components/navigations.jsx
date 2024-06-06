import DownloadCvFrom from "./cvDowload";

export default function Navigations() {
  return (
    <ul className=" flex w-full justify-start uppercase p-3 gap-4 bg-[#4d069c] sticky z-[1000] top-0 left-0 text-white text-xl">
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
