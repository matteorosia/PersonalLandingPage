import { useState, useEffect } from "react";
import Explorer from "./components/Explorer";
import CodeSection from "./components/CodeSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import MenuMobile from "./components/MenuMobile";

export default function App() {
  const [filePath, setFilePath] = useState("");
  const [file, setFile] = useState("");
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    setFile(id + ".jsx");
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
      <div className="flex sm:min-h-screen max-sm:min-h-screen">
        <div className="bg-amber-100 sm:m-10 sm:rounded-[5px] w-full flex flex-col sm:overflow-hidden">
          <Navbar
            onClick={handleCloseWindow}
            isMobile = {isMobile}
            content="Matteo Rosia | Personal Page"
          />

          <div className="flex h-full">
            <Sidebar onClick={handleMobileMenuState} />

            {/* Explorer visibile sempre su desktop, su mobile dipende da mobileMenuState */}
            <Explorer
              state={isMobile ? mobileMenuState : true}
              onClick={handleClick}
            />

            {/* CodeSection visibile sempre su desktop, su mobile dipende da mobileMenuState */}
            <CodeSection
              state={isMobile ? !mobileMenuState : true}
              file={file}
              filePath={filePath}
            />
          </div>

          <Footer content="All rights are reserved" />
        </div>
      </div>
    </>
  );
}
