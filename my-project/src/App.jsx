import { useState } from "react";
import ExplorerItem from "./components/ExplorerItem";
import CodeSection from "./components/CodeSection";
import CodeSectionTab from "./components/CodeSectionTab";

export default function App() {

  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState("");

  function handleClick(id) {
      setFilePath("/pages/" + id + ".txt"); 
      setFile(id + ".jsx");
      console.log(id + ".jsx");
  }

  return (
    <div className="h-screen flex">
      <div className="bg-amber-100 m-8 rounded-[5px] w-full flex flex-col overflow-hidden">
        <div className="w-full h-[50px] bg-neutral-900 border-b-1 border-neutral-600 flex justify-center items-center">
          <div className="bg-neutral-800 w-[400px] h-[30px] rounded-sm border-1 border-neutral-600 font-mono flex justify-center items-center text-white text-[10px]">Matteo Rosia | Personal Page</div>
        </div>


        <div className="flex h-full">
          <div className="h-full w-[100px] bg-neutral-900 border-r-1 border-neutral-600"></div>

          {/* Explorer*/}
          <div className="h-full w-[400px] bg-neutral-900 border-r-1 border-neutral-600">
            <div className="m-4 text-white font-mono">
              EXPLORER
            </div>
            <ExplorerItem id="matteo_rosia" title="Matteo Rosia" isfile={false} tab={0} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="about_me" title="About me" isfile={false} tab={1} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="who_am_I" title="Who_am_I.jsx" isfile={true} tab={2} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="skills" title="Skills" isfile={false} tab={1} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="soft_skills" title="Soft_skills.jsx" isfile={true} tab={2} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="hard_skills" title="Hard_skills.jsx" isfile={true} tab={2} onClick={handleClick}></ExplorerItem>
          </div>

          {/* Code section */}
          <div className="h-full w-full bg-neutral-800 flex flex-col">
            <div className="flex">
              <CodeSectionTab title={file || "who_am_I.jsx"}></CodeSectionTab>
               <div className="bg-neutral-900 w-full h-[40px] border-b-1 border-neutral-600"></div>
            </div>
            <CodeSection filePath={filePath || "pages/who_am_I.txt"}></CodeSection>
          </div> 
        </div>
        <div className="w-full h-[40px] bg-neutral-900 border-t-1  border-neutral-600 flex justify-center items-center text-white text-[10px]">All rights are reserved</div>
      </div>
    </div>
  )
}
