import { useState, useEffect } from "react";
import Explorer from "./components/Explorer";
import CodeSection from "./components/CodeSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import { GetFileExtension } from "./utils/GetFileExtension";
import { colors, transactionOption } from "./utils/Const";

export default function App() {

  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState("");
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bgColor, setBgColor] = useState(colors[0]);
  const [toggleStatus, setToggleStatus] = useState(true);
  const [formState, setFormState] = useState(true);

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  useEffect(() => {
    changeColor();
  },[])

  useEffect(() => {
    // funzione che controlla se la finestra è "mobile"
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // soglia mobile (768px)
    };

    checkMobile(); // controllo iniziale
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function handleClick(id) {
    setFilePath("/pages/" + id + ".txt");
    setFile(GetFileExtension(id));
    setMobileMenuState(!mobileMenuState);
  }

  function handleCloseWindow() {
    if (!isMobile){
      setFilePath("/pages/Close.txt");
      setFile("close.jsx");
    }
    setMobileMenuState(!mobileMenuState);
  }

  function handleMobileMenuState() {
    setMobileMenuState(!mobileMenuState);
  }

  return (
    <>
      <div className={bgColor}>
        <div className="flex sm:min-h-screen max-sm:min-h-screen">
          <div className={`bg-amber-100 w-full flex flex-col sm:overflow-hidden ${transactionOption} ${
            formState ? `sm:m-15 sm:rounded-[5px]` : `sm:m-0 `
          }`}>
            <Navbar
              onClick={handleCloseWindow}
              isMobile = {isMobile}
              content="Matteo Rosia | Personal Page"
              toggleStatus = {toggleStatus}
              setToggleStatus = {setToggleStatus}
              formState = {formState}
              setFormState = {setFormState}
            />

            <div className="flex h-full">
              <Sidebar onClick={handleMobileMenuState} toggleStatus = {toggleStatus}/>

              {/* Explorer visibile sempre su desktop, su mobile dipende da mobileMenuState */}
              <Explorer
                state={isMobile ? mobileMenuState : true}
                onClick={handleClick}
                toggleStatus = {toggleStatus}
              />

              {/* CodeSection visibile sempre su desktop, su mobile dipende da mobileMenuState */}
              <CodeSection
                state={isMobile ? !mobileMenuState : true}
                file={file}
                filePath={filePath}
                toggleStatus={toggleStatus}
              />
            </div>

            <Footer toggleStatus={toggleStatus} content="October 2025 | All rights reserved" />
          </div>
        </div>
      </div>
    </>
  );
}
