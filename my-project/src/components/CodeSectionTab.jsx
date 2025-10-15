import { firstBorderColorDark, firstBorderColorLight, secondaryBgColorDark, secondaryBgColorLight, transactionOption } from "../utils/Const";

export default function CodeSectionTab({ file, toggleStatus }) {
  return (
    <div className={`sm:w-[300px] max-sm:w-[500px] h-[40px] 
        border-r border-t border-t-blue-400 flex justify-center items-center relative font-mono max-sm:text-[15px] 
        sm:text-[11px] text-yellow-300 ${transactionOption} ${
          toggleStatus ? `${secondaryBgColorDark} ${firstBorderColorDark}` : `${secondaryBgColorLight} ${firstBorderColorLight}`}`}>
        {file}
         <div className="absolute right-2 rounded-full bg-white w-[8px] h-[8px]"></div>
    </div>
  );
}
