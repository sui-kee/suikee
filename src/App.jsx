import { useState } from "react";
import "./App.css";
import MyProvides from "./components/myProvides";
import ProfileCard from "./components/profileCard";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Navigations from "./components/navigations";
import FooterContact from "./components/footerContact";
import Divider from "./components/divider";

function App() {
  return (
    <>
      <main className=" bg-[#4d069c] overflow-x-hidden  flex justify-center flex-col items-center">
        {/* <Divider /> */}
        <Navigations />
        <ProfileCard />
        <Skills />
        <MyProvides />
        <Projects />
        <FooterContact />
      </main>
    </>
  );
}

export default App;
