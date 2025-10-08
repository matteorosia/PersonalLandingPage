
import CodeSectionContent from "./CodeSectionContent";
import CodeSectionTab from "./CodeSectionTab";

export default function CodeSection({file, filePath, state}) {
    return (
        state &&
        <div className="h-full w-full bg-neutral-800 flex flex-col">
            <div className="flex">
                <CodeSectionTab file={file || "Who_I_am.jsx"}></CodeSectionTab>
                <div className="bg-neutral-900 w-full h-[40px] border-b border-neutral-600"></div>
            </div>
            <div class="flex">
               <CodeSectionContent filePath={filePath || "pages/Who_I_am.txt"}></CodeSectionContent>
            </div>
      </div> 
    );
}
