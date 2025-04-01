"use client"
import LogoIcon from "@/app/ui/icon/logo"
import { interFont } from "@/app/ui/fonts"
import SidebarChip from "../side-bar-chip"
import FastIcon from "@/app/ui/icon/fast-icon"
import HistoryTopics from "../history-topics"
import Login from "../login"
import Button from "../buttons"
import BlinkIcon from "@/app/ui/icon/blink-icon"

const Sidebar = () => {
    return <div className="w-60 lg:h-screen px-4 py-6 border-r-1 border-neutral-200">
        <div className="flex flex-col h-full w-full justify-between">
            <div>
                {/* intro */}
                <div className="flex items-center py-4 px-1">
                    <LogoIcon />
                    <span className={`${interFont.className} font-bold`}>Chat AI</span>
                </div>

                {/* actions  */}
                <div className="">
                    <SidebarChip title="Ongoing prompt" icon={(color) => <FastIcon color={color} />} onClick={() => { }} />
                    <HistoryTopics list={['a', 'b', 'c']} />

                </div>
            </div>

            {/* login  */}
            <div className="flex flex-col gap-2">
                <Button type="default" variant="outline" onClick={() => { }} content="Start new chat" icon={<BlinkIcon />} className="block lg:!hidden"/>
                <Login />
            </div>
        </div>

    </div>
}

export default Sidebar