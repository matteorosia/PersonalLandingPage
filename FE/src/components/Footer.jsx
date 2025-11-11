import { firstFontColorBlack, firstFontColorLight, firstBgColorDark, firstBorderColorDark, firstBgColorLight, firstBorderColorLight, transactionOption } from "../utils/Const";
import icon_settings_dark from "../assets/dark/icon-settings-dark.png";
import icon_settings_light from "../assets/light/icon-settings-light.png";
import icon_translate_dark from "../assets/dark/icon-translate-dark.png";
import icon_translate_light from "../assets/light/icon-translate-light.png";
import { Link } from "react-router-dom";

export default function Footer({content, toggleStatus}) {
    return (
            <div className={`w-full min-h-[40px] relative
                border-t flex 
                justify-center items-center 
                text-[10px] ${transactionOption} ${
                    toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark} ${firstFontColorBlack}` : `${firstBgColorLight} ${firstBorderColorLight} ${firstFontColorLight}` 
                }`}>
            {content}
            <div className="flex absolute right-5 gap-4">
                <Link to='/panel'>
                     <img src={toggleStatus ? icon_settings_dark : icon_settings_light} alt="icon" className={`my-1 w-[20px] h-[20px] hover:w-[25px] hover:h-[25px] ${transactionOption}`}/>
                </Link>
                <img src={toggleStatus ? icon_translate_dark : icon_translate_light} alt="icon" className={`my-1 w-[20px] h-[20px] hover:w-[25px] hover:h-[25px] ${transactionOption}`}/>
            </div>
        </div>
    );
}