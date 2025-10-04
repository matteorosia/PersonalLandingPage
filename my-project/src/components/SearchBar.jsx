export default function SearchBar({content}){
    return (
        <div className="bg-neutral-800 
            w-[400px] h-[30px] rounded-sm border-1 
            border-neutral-600 font-mono flex 
            justify-center items-center 
            text-white text-[10px]">{content}
        </div>
    )
}

