export default function CodeSectionTab({ title }) {
  return (
    <div className="bg-neutral-800 w-[300px] h-[40px] 
        border-r-1 border-t-1 border-t-blue-400 border-r-neutral-600 flex 
        justify-center items-center relative text-white font-mono text-[14px] text-yellow-300">
        {title}
         <div className="absolute right-2 rounded-full bg-white w-[8px] h-[8px]"></div>
    </div>
  );
}
