import CodeSectionContent from "./CodeSectionContent";
import CodeSectionTab from "./CodeSectionTab";
import { defaultPage, defaultExtensionPages, pathPages, defaultExtension, firstBgColorDark, firstBorderColorLight, firstBgColorLight, firstBorderColorDark, secondaryBgColorDark, secondaryBgColorLight, transactionOption } from "../utils/Const";

export default function CodeSection({file, filePath, state, toggleStatus}) {

    return (
        state &&
        <div className={`h-full w-full flex flex-col ${transactionOption} ${ toggleStatus ? `${secondaryBgColorDark}` : `${secondaryBgColorLight}`}`}>
            <div className="flex">

                {/* Tab */}
                <CodeSectionTab toggleStatus = {toggleStatus} file={file || defaultPage + defaultExtension}></CodeSectionTab>
                <div className={`w-full h-[40px] border-b ${transactionOption} ${toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark}` : `${firstBgColorLight} ${firstBorderColorLight}`}`}></div>
            </div>
            <div className="flex">

                {/* Contenuto del codice */}
               <CodeSectionContent toggleStatus = {toggleStatus} filePath={filePath || pathPages + defaultPage + defaultExtensionPages}></CodeSectionContent>
            </div>
      </div> 
    );
}
