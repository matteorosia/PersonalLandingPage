import Toggle from "./Toggle";
import { transactionOption, firstFontColorBlack, firstFontColorLight, firstBgColorDark, firstBgColorLight, firstBorderColorDark, firstBorderColorLight } from "../utils/Const";

export default function Navbar({ content, onClick, isMobile, toggleStatus, setToggleStatus, formState, setFormState }) {
  
  function changeFormState(){
    setFormState(!formState);
    console.log(formState);
  }

  return (
    <>
      {isMobile ? (
        <>
        <div className={`w-full h-[50px] flex items-center px-4 relative border-b ${
          toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark}` : `${firstBgColorLight} ${firstBorderColorLight}`
          }`}>
          <div className="flex gap-2 absolute left-4">
            <div className="h-[20px] w-[30px] flex justify-between flex-col" onClick={onClick}>
              <div className="h-[3px] w-full bg-red-500"></div>
              <div className="h-[3px] w-full bg-yellow-400"></div>
              <div className="h-[3px] w-full bg-green-600"></div>
            </div>
          </div>
          <div className="mx-auto">
            <div
              className={`w-[180px] h-[30px] rounded-sm border
                font-mono flex justify-center items-center 
                text-[9px] ${transactionOption}
                ${toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark} ${firstFontColorBlack}` : `${firstBgColorLight} ${firstBorderColorLight} ${firstFontColorLight}`}
              }`}>{content}
            </div>
          </div>
            <Toggle toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></Toggle>
        </div>
        </>
      ) : (
        <>
        <div className={`w-full h-[50px] flex items-center px-4 relative border-b ${transactionOption} ${
          toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark}` : `${firstBgColorLight} ${firstBorderColorLight}`
        }`}>
          <div className="flex gap-2 absolute left-4 cursor-pointer">
            <div className="rounded-full h-[20px] w-[20px] bg-red-500 hover:bg-red-700 active:bg-red-900 transition-colors duration-400 cursor-pointer" onClick={onClick}></div>
            <div className="rounded-full h-[20px] w-[20px] bg-yellow-400 hover:bg-yellow-700 active:bg-yellow-900 transition-colors duration-400 cursor-pointer"></div>
            <div className="rounded-full h-[20px] w-[20px] bg-green-600 hover:bg-green-700 active:bg-green-900 transition-colors duration-400 cursor-pointer" onClick={changeFormState}></div>
          </div>
          <div className="mx-auto max-sm:hidden">
            <div
              className={`w-[400px] h-[30px] rounded-sm border
                font-mono flex justify-center items-center 
               text-[15px] ${transactionOption}
                ${toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark} ${firstFontColorBlack}` : `${firstBgColorLight} ${firstBorderColorLight} ${firstFontColorLight}`}
              }`}>{content}
            </div>
          </div>

          <Toggle toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></Toggle>
          
        </div>
        </>
      )}
    </>
  );
}
