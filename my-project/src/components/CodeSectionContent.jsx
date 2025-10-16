import { useEffect, useState } from "react";
import Caret from "./Caret";
import { RenderCodeContent } from "../utils/RenderCodeContent";
import { RenderErrorContent } from "../utils/RenderErrorContent";

export default function CodeSectionContent({ filePath }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!filePath) return;

    fetch(filePath)
      .then((res) => res.text())
      .then((data) => setContent(data))
      .catch((err) => setContent(`Error code: ${err}`));
  }, [filePath]);

  return (      
    <div className="p-4 text-white font-mono sm:text-[14px] max-sm:text-[12px] whitespace-pre-wrap break-words">
      <div className="overflow-y-scroll max-sm:max-h-[calc(100vh-200px)]">

      {/*Contenuto del singolo file formattato*/}
      {RenderCodeContent(content)}

      {/* Caret con testo recuperato a partire dal contenuto del file */}
      <Caret content = {RenderErrorContent(content)}></Caret>
      </div>
    </div>
  );
}