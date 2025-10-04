export default function CodeSectionTab({ title }) {
  return (
    <div className="bg-neutral-800 w-[300px] h-[40px] 
        border-r-1 border-neutral-600 flex 
        justify-center items-center text-white font-mono text-[14px]">
        {title}
    </div>
  );
}
