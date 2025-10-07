export default function CodeSectionTab({ file }) {
  return (
    <div className="bg-neutral-800 sm:w-[300px] max-sm:w-[480px] h-[40px] 
        border-r border-t border-t-blue-400 border-r-neutral-600 flex 
        justify-center items-center relative font-mono max-sm:text-[15px] sm:text-[13px] text-yellow-300 z-50">
        {file}
         <div className="absolute right-2 rounded-full bg-white w-[8px] h-[8px]"></div>
    </div>
  );
}
