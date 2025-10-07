export default function ExplorerItem({ id, title, type, tab, onClick }) {
  
    const marginMap = {
        0: "",
        1: "ml-4",
        2: "ml-12",
    };

    return (
    <div className="pl-4 text-white text-[14px] hover:bg-neutral-500 active:bg-neutral-500 cursor-pointer"  onClick={type > 0 ? () => onClick(id) : undefined}>
        <p
      className={`flex items-center font-mono ${marginMap[tab] || ""} ${
      type === 1 ? "text-blue-200" 
      : type === 2  ? "text-red-200" 
      : type === 3  ? "text-purple-200" 
      : type === 4  ? "text-yellow-200" 
      : type === 5  ? "text-orange-200" 
      : "text-green-200 "
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
