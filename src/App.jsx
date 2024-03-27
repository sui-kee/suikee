import { useState } from "react";
import "./App.css";
import MyProvides from "./components/myProvides";
import ProfileCard from "./components/profileCard";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Navigations from "./components/navigations";

function App() {
  return (
    <>
      <main className=" bg-[#4d069c] flex justify-center flex-col items-center">
        <Navigations />
        <ProfileCard />
        <Skills />
        <MyProvides />
        <Projects />
      </main>
    </>
  );
}

export default App;
