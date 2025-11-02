import { Link } from "react-router-dom";
import * as c from "./utils/Const";
import { useState, useEffect } from "react";
import { fetchContent, updateContent } from "./utils/api";
import { RenderCodeContent } from "./utils/RenderCodeContent";
import { RenderErrorContent } from "./utils/RenderErrorContent";
import Caret from "./components/Caret";
import { useNavigate } from "react-router-dom";

export default function Pannel() {

    const [selected, setOptionState] = useState(c.keys_option[0].id)
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    function handleEventChange(e){
        setOptionState(e.target.value);
    }

    async function handleUpdate() {
        await updateContent(selected, {
            title: selected,
            value: content,
        });

        navigate("/");
    }

      useEffect(() => {
        const loadContent = async () => {
          const c = await fetchContent(selected, true);
          setContent(c);
        };
        loadContent();
      }, [selected]);

    return (
        <>
        <div className="bg-neutral-800 font-mono">
            <div className="h-screen w-screen bg-neutral-700 flex flex-col gap-4">
            <div className="relative w-full min-h-[80px] bg-neutral-800 border-b border-neutral-600 flex justify-center items-center">
                <h1 className="text-white text-[30px]">CONTROL PANNEL</h1>
                <h3 className="absolute right-5 text-white p-2 rounded-2xl text-[13px]">
                    Hello Matteo</h3>
            </div>

           <div className="flex flex-col h-full justify-center items-center">
                <div className="flex flex-col gap-4 w-9/10 ">
                    <select 
                        className="bg-neutral-400 w-full outline-0 rounded-[2px] p-4" 
                        onChange={handleEventChange}
                        value={selected}>
                        {c.keys_option.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.caption}
                            </option>
                        ))}
                    </select>
                    <div className="flex gap-2">
                        <textarea 
                        className="bg-neutral-400 text-[15px] p-4 w-full outline-0 rounded-[4px] min-h-[500px]"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="bg-neutral-800 text-[13px] p-4 w-full outline-0 rounded-[4px] min-h-[500px] whitespace-pre-wrap break-words">
                        {RenderCodeContent(content,true)}
                        {<Caret toggleStatus = {true} content = {RenderErrorContent(content)}></Caret>}
                    </div>
                    </div>
                </div>
                
                <div className="flex flex-row">
                    <Link to="/" className="text-white font-semibold">
                        <div className="px-[12px] m-4 border border-neutral-400 rounded-[4px]">Go Back</div>
                    </Link>
                     <div className="px-[12px] m-4 border text-white font-bold border-neutral-400 
                                    rounded-[4px] cursor-pointer" onClick={handleUpdate}>Update
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}