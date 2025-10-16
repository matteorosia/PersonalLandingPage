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

  const resizingForm = formState ? `sm:h-[720px] sm:w-[1300px] max-sm:h-[calc(100vh-40px)] max-sm:w-full rounded-[12px] max-sm:mx-[10px] max-sm:my-[20px] sm:m-[30px]` : `h-screen w-full`
  const classes = `w-full flex flex-col overflow-y-hidden
    ${transactionOption}
    ${resizingForm}`

  return (
    <>
      <body className={bgColor}>
        <div className={`flex min-h-screen justify-center items-center`}>
          <div className={classes}>
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
      </body>
    </>
  );
}
