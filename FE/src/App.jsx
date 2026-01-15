import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { username } = useParams(); 

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
    setFilePath(id);
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

  const resizingForm = formState ? `sm:p-[8vh] max-sm:p-[2vh]` : ``
  const resizingFormClasses = `flex max-sm:min-h-screen sm:h-[100vh] w-screen justify-center items-center
    ${transactionOption}
    ${resizingForm}`

  const roundedFormState = formState ? "rounded-[12px]" : "rounded-0"

  return (
    <>
      <body className={bgColor}>
        <div className={resizingFormClasses}>
          <div className={`flex w-full h-full flex-col overflow-hidden ${roundedFormState} ${transactionOption}`}>
            <Navbar
              onClick={handleCloseWindow}
              isMobile = {isMobile}
              content={`${username} | Personal Page`}
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
                username={username}
              />
            </div>

            <Footer toggleStatus={toggleStatus} content="October 2025 | All rights reserved" />
          </div>
        </div>
      </body>
    </>
  );
}
