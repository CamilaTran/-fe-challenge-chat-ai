import LogoIcon from "../../ui/icon/logo"
import HamburgerIcon from "../../ui/icon/hamberger-icon";
import { interFont } from "@/app/ui/fonts"

const Navigation = () => {
    return <div className="w-full md:px-4 px-[12px] py-4 flex justify-between items-center bg-white border-b border-neutral-200">
        <div className="flex items-center">
            <LogoIcon />
            <span className={`${interFont.className} font-bold`}>Chat AI</span>
        </div>

        <div className="">
            <HamburgerIcon />
        </div>
    </div>
}

export default Navigation