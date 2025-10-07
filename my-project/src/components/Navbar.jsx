export default function Navbar({ content, onClick, isMobile }) {
  return (
    <>
      {isMobile ? (
        <>
        <div className="w-full h-[50px] bg-neutral-900 border-b border-neutral-600 flex items-center px-4 relative">
          <div className="flex gap-2 absolute left-4">
            <div className="h-[20px] w-[30px] flex justify-between flex-col" onClick={onClick}>
              <div className="h-[3px] w-full  bg-red-500"></div>
              <div className="h-[3px] w-full bg-yellow-400"></div>
              <div className="h-[3px] w-full  bg-green-600"></div>
            </div>
          </div>
          <div className="mx-auto">
            <div
              className="bg-neutral-800 
                w-[280px] h-[30px] rounded-sm border border-neutral-600 
                font-mono flex justify-center items-center 
                text-white text-[14px]">
              {content}
            </div>
          </div>
        </div>
        </>
      ) : (
        <>
        <div className="w-full h-[50px] bg-neutral-900 border-b border-neutral-600 flex items-center px-4 relative">
          <div className="flex gap-2 absolute left-4">
            <div className="rounded-full h-[20px] w-[20px] bg-red-500 cursor-pointer" onClick={onClick}></div>
            <div className="rounded-full h-[20px] w-[20px] bg-yellow-400"></div>
            <div className="rounded-full h-[20px] w-[20px] bg-green-600"></div>
          </div>
          <div className="mx-auto max-sm:hidden">
            <div
              className="bg-neutral-800 
                w-[400px] h-[30px] rounded-sm border border-neutral-600 
                font-mono flex justify-center items-center 
                text-white text-[15px]"
            >
              {content}
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}
