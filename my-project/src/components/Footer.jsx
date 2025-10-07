export default function Footer({content}) {
    return (
        <div className="w-full h-[40px]
            bg-neutral-900 border-t-1  
            border-neutral-600 flex 
            justify-center items-center 
            text-white text-[10px]">
        {content}
        </div>
    );
}