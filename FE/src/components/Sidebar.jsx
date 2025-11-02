import icon1_dark from "../assets/dark/icon1-dark.png"
import icon1_light from "../assets/light/icon1-light.png";
import icon2_dark from "../assets/dark/icon2-dark.png"
import icon2_light from "../assets/light/icon2-light.png";
import icon3_dark from "../assets/dark/icon3-dark.png"
import icon3_light from "../assets/light/icon3-light.png";
import icon4_dark from "../assets/dark/icon4-dark.png"
import icon4_light from "../assets/light/icon4-light.png";
import icon5_dark from "../assets/dark/icon5-dark.png"
import icon5_light from "../assets/light/icon5-light.png";
import { firstBgColorDark, firstBgColorLight, firstBorderColorDark, firstBorderColorLight, transactionOption } from "../utils/Const";

export default function Sidebar({toggleStatus}) {
    return (
        <div className={`w-[80px] flex flex-col items-center gap-4 py-4 border-r ${transactionOption} ${
            toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark}` : `${firstBgColorLight} ${firstBorderColorLight} `
        }`}>
            <img src={toggleStatus ? icon1_dark : icon1_light} alt="icon1" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={toggleStatus ? icon2_dark : icon2_light} alt="icon1" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={toggleStatus ? icon3_dark : icon3_light} alt="icon1" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={toggleStatus ? icon4_dark : icon4_light} alt="icon1" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={toggleStatus ? icon5_dark : icon5_light} alt="icon1" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
        </div>
    );
}