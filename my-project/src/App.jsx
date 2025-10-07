import { useState } from "react";
import Explorer from "./components/Explorer";
import CodeSection from "./components/CodeSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";

export default function App() {

  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState("");

  function handleClick(id) {
      setFilePath("/pages/" + id + ".txt"); 
      setFile(id + ".jsx");
      console.log(file);
  }

  function handleCloseWindow(){
    setFilePath("/pages/Close.txt"); 
    setFile("close.jsx");
  }

  return (
    <>
      <div className="flex sm:h-screen">
        <div className="bg-amber-100 sm:m-10 sm:rounded-[5px] w-full flex flex-col sm:overflow-hidden">
          <Navbar onClick={handleCloseWindow} content="Matteo Rosia | Personal Page"></Navbar>

          <div className="flex h-full">
            <Sidebar></Sidebar>
            <Explorer onClick = {handleClick}></Explorer> 
            <CodeSection file={file} filePath={filePath}></CodeSection>
          </div>
          <Footer content = "All rights are reserved" ></Footer>
        </div>
      </div>
    </>
  )
}
