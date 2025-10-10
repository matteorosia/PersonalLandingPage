import CodeSectionContent from "./CodeSectionContent";
import CodeSectionTab from "./CodeSectionTab";
import { defaultPage, defaultExtensionPages, pathPages, defaultExtension } from "../utils/Const";

export default function CodeSection({file, filePath, state}) {

    return (
        state &&
        <div className="h-full w-full bg-neutral-800 flex flex-col">
            <div className="flex">

                {/* Tab */}
                <CodeSectionTab file={file || defaultPage + defaultExtension}></CodeSectionTab>
                <div className="bg-neutral-900 w-full h-[40px] border-b border-neutral-600"></div>
            </div>
            <div className="flex">

                {/* Contenuto del codice */}
               <CodeSectionContent filePath={filePath || pathPages + defaultPage + defaultExtensionPages}></CodeSectionContent>
            </div>
      </div> 
    );
}
