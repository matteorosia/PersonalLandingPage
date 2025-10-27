import { firstFontColorBlack, firstFontColorLight, firstBgColorDark, firstBorderColorDark, firstBgColorLight, firstBorderColorLight, transactionOption } from "../utils/Const";
export default function Footer({content, toggleStatus}) {
    return (
            <div className={`w-full min-h-[40px] relative
                border-t flex 
                justify-center items-center 
                text-[10px] ${transactionOption} ${
                    toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark} ${firstFontColorBlack}` : `${firstBgColorLight} ${firstBorderColorLight} ${firstFontColorLight}` 
                }`}>
            {content}
            <div className="flex absolute right-5 rounded-2xl overflow-auto cursor-pointer">
                <div className="bg-green-800 w-[10px] h-[20px]"></div>
                <div className="bg-white w-[10px] h-[20px]"></div>
                <div className="bg-red-800 w-[10px] h-[20px]"></div>
            </div>
        </div>
    );
}