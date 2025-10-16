import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import { firstBgColorDark, firstBgColorLight, firstBorderColorDark, firstBorderColorLight, transactionOption } from "../utils/Const";

export default function Sidebar({toggleStatus}) {
    return (
        <div className={`h-full sm:min-w-[80px] max-sm:min-w-[60px] flex flex-col items-center gap-4 py-4 border-r ${transactionOption} ${
            toggleStatus ? `${firstBgColorDark} ${firstBorderColorDark}` : `${firstBgColorLight} ${firstBorderColorLight} `
        }`}>
            <img src={icon1} alt="icon1" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={icon2} alt="icon2" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={icon3} alt="icon3" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={icon4} alt="icon4" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={icon5} alt="icon5" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
            <img src={icon6} alt="icon6" className={`my-1 w-[30px] h-[30px] hover:w-[35px] hover:h-[35px] ${transactionOption}`}/>
        </div>
    );
}