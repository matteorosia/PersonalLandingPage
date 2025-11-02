import { useEffect, useState } from "react";
import Caret from "./Caret";
import { RenderCodeContent } from "../utils/RenderCodeContent";
import { RenderErrorContent } from "../utils/RenderErrorContent";
import { fetchContent } from "../utils/api";

export default function CodeSectionContent({ filePath, toggleStatus }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      const c = await fetchContent(filePath, true);
      setContent(c);
    };

    loadContent();
  }, [filePath]);

  if (content === null) {
    return <div></div>;
  }

  if (content == "") {
    return (
        <div className={`p-4 font-mono sm:text-[13px] max-sm:text-[10px] whitespace-pre-wrap break-words ${toggleStatus ? `text-white` :`text-black`}`}>
          Ops, something was wrong :( please contact administrator...
        </div>
    );
  }

  return (   
       
    <div className={`p-4 font-mono sm:text-[13px] max-sm:text-[10px] whitespace-pre-wrap break-words ${toggleStatus ? `text-white` :`text-black`}`}>

      {/*Contenuto del singolo file formattato*/}
      {RenderCodeContent(content, toggleStatus)}

      {/* Caret con testo recuperato a partire dal contenuto del file */}
      {<Caret toggleStatus = {toggleStatus} content = {RenderErrorContent(content)}></Caret>}
    </div>
  );
}