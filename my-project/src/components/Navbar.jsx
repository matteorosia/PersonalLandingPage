export default function Navbar({ content, onClick }){
    return (
        <div className="w-full h-[50px] bg-neutral-900 border-b border-neutral-600 flex items-center px-4 relative">
          <div className="flex gap-2 absolute left-4">
            <div className="rounded-full h-[20px] w-[20px] bg-red-500" onClick={onClick}></div>
            <div className="rounded-full h-[20px] w-[20px] bg-yellow-400"></div>
            <div className="rounded-full h-[20px] w-[20px] bg-green-600"></div>
          </div>

          <div className="mx-auto max-sm:hidden">
              <div className="bg-neutral-800 
                w-[400px] h-[30px] rounded-sm border-1 
                border-neutral-600 font-mono flex 
                justify-center items-center 
                text-white text-[10px]">{content}
            </div>
         </div>
        </div>
    );
}