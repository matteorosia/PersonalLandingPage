import { firstBgColorDark, firstBgColorLight, transactionOption } from "../utils/Const";

export default function ExplorerItem({ id, title, type, tab, onClick, isSelected, toggleStatus }) {
  
  const marginMap = {
      0: "",
      1: "ml-4",
      2: "ml-12",
  };

  return (
  <div
    className={`px-4 text-[14px] hover:bg-neutral-500 active:bg-neutral-600 cursor-pointer ${transactionOption} ${
      isSelected ? "bg-neutral-600" : toggleStatus ? firstBgColorDark : firstBgColorLight
    }`}
    
    onClick={type > 0 ? () => onClick(id) : undefined}>        
      <p className={`flex items-center font-mono ${marginMap[tab] || ""} ${
        type === 1 ? toggleStatus ? "text-blue-200" : "text-blue-900" 
        : type === 2 ? toggleStatus ? "text-red-200"  : "text-red-700" 
        : type === 3 ? toggleStatus ? "text-purple-200"  : "text-purple-800" 
        : type === 4  ? toggleStatus ? "text-yellow-200" : "text-yellow-700" 
        : type === 5  ? toggleStatus ? "text-orange-200" : "text-orange-600" 
        : toggleStatus ? "text-green-200" : "text-red-900" 
      }`}>

        {type === 0 && (
            <svg
                className="w-2 h-2 text-gray-800 dark:text-white inline mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
            >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        )}
        {title}
      </p>
    </div>
  );
}
