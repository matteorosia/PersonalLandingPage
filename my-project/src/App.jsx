import { useState } from "react";
import ExplorerItem from "./components/ExplorerItem";
import CodeSection from "./components/CodeSection";
import CodeSectionTab from "./components/CodeSectionTab";
import SearchBar from "./components/SearchBar";

//Image import
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import icon6 from "./assets/icon6.png";


export default function App() {

  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState("");

  function handleClick(id) {
      setFilePath("/pages/" + id + ".txt"); 
      setFile(id + ".jsx");
      console.log("pippo");
  }

  function handleCloseWindow(){
    setFilePath("/pages/Close.txt"); 
    setFile("close.jsx");
  }

  return (
    <>
    <div className="flex lg:h-screen">
      <div className="bg-amber-100 lg:m-10 md:m-10 xs:m-10 rounded-[5px] w-full flex flex-col overflow-hidden">
        
        <div className="w-full h-[50px] bg-neutral-900 border-b border-neutral-600 flex items-center px-4 relative">
  
        <div className="flex gap-2 absolute left-4">
          <div className="rounded-full h-[20px] w-[20px] bg-red-500" onClick={handleCloseWindow}></div>
          <div className="rounded-full h-[20px] w-[20px] bg-yellow-400"></div>
          <div className="rounded-full h-[20px] w-[20px] bg-green-600"></div>
        </div>

        {/* Barra al centro */}
        <div className="mx-auto">
          <SearchBar content="Matteo Rosia | Personal Page" />
        </div>
      </div>


        <div className="flex h-full">

          {/* Sidebar */}
          <div className="h-full w-[80px] bg-neutral-900 border-r-1 border-neutral-600 flex flex-col items-center gap-4 py-4">
              <img src={icon1} alt="icon1" className="w-[30px] h-[30px]" />
              <img src={icon2} alt="icon2" className="w-[30px] h-[30px]" />
              <img src={icon3} alt="icon3" className="w-[30px] h-[30px]" />
              <img src={icon4} alt="icon4" className="w-[30px] h-[30px]" />
              <img src={icon5} alt="icon5" className="w-[30px] h-[30px]" />
              <img src={icon6} alt="icon6" className="w-[30px] h-[30px]" />
          </div>

          {/* Explorer*/}
          <div className="h-full w-[400px] bg-neutral-900 border-r-1 border-neutral-600">
            <div className="m-4 text-white font-mono">
              EXPLORER
            </div>
            <ExplorerItem id="Matteo_rosia" title="Matteo Rosia" type={0} tab={0} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="About_me" title="About me" type={0} tab={1} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Who_am_I" title="Who_am_I.jsx" type={1} tab={2} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="skills" title="Skills" type={0} tab={1} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Soft_skills" title="Soft_skills.jsx" type={1} tab={2} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Hard_skills" title="Hard_skills.jsx" type={1} tab={2} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Work_history" title="Work_history" type={0} tab={1} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Business" title="Business.py" type={1} tab={2} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Education" title="Education" type={0} tab={1} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Uni_and_others" title="Uni_and_others.jsx" type={1} tab={2} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Customers" title="Customers" type={0} tab={1} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="Who_I_worked_with" title="Who_I_worked_with.jsx" type={1} tab={2} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="index" title="index.html" type={2} tab={0} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="style" title="style.css" type={3} tab={0} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="pippo" title="pippo.php" type={4} tab={0} onClick={handleClick}></ExplorerItem>
            <ExplorerItem id="readme" title="readme.txt" type={5} tab={0} onClick={handleClick}></ExplorerItem>
          </div>

          {/* Code section */}
          <div className="h-full w-full bg-neutral-800 flex flex-col">
            <div className="flex">
              <CodeSectionTab title={file || "who_am_I.jsx"}></CodeSectionTab>
               <div className="bg-neutral-900 w-full h-[40px] border-b-1 border-neutral-600"></div>
            </div>
            <CodeSection filePath={filePath || "pages/Who_am_I.txt"}></CodeSection>
          </div> 
        </div>
        <div className="w-full h-[40px] bg-neutral-900 border-t-1  border-neutral-600 flex justify-center items-center text-white text-[10px]">All rights are reserved</div>
      </div>
    </div>
    </>
  )
}
