import { secondaryBgColorDark, secondaryBgColorLight } from "../utils/Const";

export default function Toggle({toggleStatus, setToggleStatus}) {

    function changeToggleStatus(){
        setToggleStatus(!toggleStatus)
    }

    return (
        <div className="flex absolute right-4">
            <div className={`flex items-center rounded-full w-[60px] h-[28px] px-[4px] transition-all duration-400 ease-linear ${
                  toggleStatus ? `${secondaryBgColorDark}` : `${secondaryBgColorLight}`
            }`}>
            <div
                onClick={changeToggleStatus}
                className={`rounded-full h-[20px] w-[20px] transition-all duration-200 ease-linear ${
                toggleStatus ? `translate-x-0 ${secondaryBgColorLight}` : `translate-x-[32px] ${secondaryBgColorDark}`
                }`}
            ></div>
            </div>
        </div>
    );

}