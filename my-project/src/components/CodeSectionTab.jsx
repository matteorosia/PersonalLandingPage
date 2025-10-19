import { firstBorderColorDark, firstBorderColorLight, secondaryBgColorDark, secondaryBgColorLight, transactionOption } from "../utils/Const";

export default function CodeSectionTab({ file, toggleStatus }) {

  const secondary_color = toggleStatus ? secondaryBgColorDark : secondaryBgColorLight
  const first_color = toggleStatus ? firstBorderColorDark : firstBorderColorLight
  const text_color = toggleStatus ? " text-yellow-300" : "text-black"
  
  const classes = 
  `sm:w-[300px] h-[40px] max-sm:w-[300px]
  border-r border-t border-t-blue-400 flex justify-center items-center relative font-mono
  text-[11px]
  ${secondary_color}
  ${first_color}
  ${transactionOption}
  ${text_color}
  `

  return (
    <div className={classes}>
        {file}
         <div className={`absolute right-2 rounded-full w-[8px] h-[8px] ${toggleStatus ? "bg-white" : "bg-black"}`}></div>
    </div>
  );
}
