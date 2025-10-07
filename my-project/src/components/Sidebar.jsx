import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

export default function Sidebar() {
    return (
        <div className="h-full w-[80px] bg-neutral-900 border-r-1 border-neutral-600 flex flex-col items-center gap-4 py-4">
            <img src={icon1} alt="icon1" className="w-[30px] h-[30px]" />
            <img src={icon2} alt="icon2" className="w-[30px] h-[30px]" />
            <img src={icon3} alt="icon3" className="w-[30px] h-[30px]" />
            <img src={icon4} alt="icon4" className="w-[30px] h-[30px]" />
            <img src={icon5} alt="icon5" className="w-[30px] h-[30px]" />
            <img src={icon6} alt="icon6" className="w-[30px] h-[30px]" />
        </div>
    );
}