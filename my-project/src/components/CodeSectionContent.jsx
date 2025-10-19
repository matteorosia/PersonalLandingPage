import { useEffect, useState } from "react";
import Caret from "./Caret";
import { RenderCodeContent } from "../utils/RenderCodeContent";
import { RenderErrorContent } from "../utils/RenderErrorContent";

export default function CodeSectionContent({ filePath, toggleStatus }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!filePath) return;

    fetch(filePath)
      .then((res) => res.text())
      .then((data) => setContent(data))
      .catch((err) => setContent(`Error code: ${err}`));
  }, [filePath]);

  return (      
    <div className={`p-4 font-mono sm:text-[13px] max-sm:text-[10px] overflow-scroll whitespace-pre-wrap break-words ${toggleStatus ? `text-white` :`text-black`}`}>

      {/*Contenuto del singolo file formattato*/}
      {RenderCodeContent(content, toggleStatus)}

      {/* Caret con testo recuperato a partire dal contenuto del file */}
      <Caret toggleStatus = {toggleStatus} content = {RenderErrorContent(content)}></Caret>
    </div>
  );
}