import { useEffect, useState } from "react";
import Caret from "./Caret";
import { RenderCodeContent } from "../utils/RenderCodeContent";
import { RenderErrorContent } from "../utils/RenderErrorContent";

export default function CodeSectionContent({ filePath, toggleStatus }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async() => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/contents/${filePath}`);
      const data = await response.json();
      console.log(`http://127.0.0.1:8000/api/contents/${filePath}`);
      setContent(data);
    } catch(err) {
      setContent("");
      console.log(err);
    }
  }

  return (      
    <div className={`p-4 font-mono sm:text-[13px] max-sm:text-[10px] whitespace-pre-wrap break-words ${toggleStatus ? `text-white` :`text-black`}`}>

      {/*Contenuto del singolo file formattato*/}
      
      {/*RenderCodeContent(content.map(), toggleStatus)*/}

      {/* Caret con testo recuperato a partire dal contenuto del file */}
      {/*<Caret toggleStatus = {toggleStatus} content = {RenderErrorContent(content)}></Caret>*/}
      <Caret toggleStatus = {toggleStatus} content = {content.value}></Caret>
    </div>
  );
}