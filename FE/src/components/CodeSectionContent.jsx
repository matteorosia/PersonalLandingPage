import { useEffect, useState } from "react";
import Caret from "./Caret";
import axios from "axios"
import { RenderCodeContent } from "../utils/RenderCodeContent";
import { RenderErrorContent } from "../utils/RenderErrorContent";

export default function CodeSectionContent({ filePath, toggleStatus, username }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try{
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/contents/${username}/${filePath}`);
        console.log(res.data)
        setContent(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchContent()
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
      {RenderCodeContent(content[0].content, toggleStatus)}

      {/* Caret con testo recuperato a partire dal contenuto del file */}
      {<Caret toggleStatus = {toggleStatus} content = {RenderErrorContent(content)}></Caret>}
    </div>
  );
}