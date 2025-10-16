import { firstFontColorBlack, firstFontColorLight, firstBgColorDark, firstBorderColorDark, firstBgColorLight, firstBorderColorLight, transactionOption } from "../utils/Const";
export default function Footer({content, toggleStatus}) {
    return (
        <div className={`w-full min-h-[40px]
            border-t flex 
            justify-center items-center 
            text-[10px] ${transactionOption} ${
                toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark} ${firstFontColorBlack}` : `${firstBgColorLight} ${firstBorderColorLight} ${firstFontColorLight}` 
            }`}>
        {content}
        </div>
    );
}