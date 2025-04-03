"use client"
import LogoIcon from "@/app/ui/icon/logo"
import { interFont } from "@/app/ui/fonts"
import SidebarChip from "../side-bar-chip"
import FastIcon from "@/app/ui/icon/fast-icon"
import HistoryTopics from "../history-topics"
import Button from "../buttons"
import BlinkIcon from "@/app/ui/icon/blink-icon"

interface SidebarProps {
    goToSignIn: () => void
}

const Sidebar = ({ goToSignIn }: SidebarProps) => {
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
                <Button styling="secondary" onClick={() => { }} content="Start new chat" icon={<BlinkIcon />} className="block lg:!hidden" />
                <div className="flex flex-col gap-4">
                    <div className="border border-neutral-200 flex flex-col gap-4 rounded-lg bg-white p-4">
                        <div>
                            <p className="text-sm font-medium text-neutral-900">Let’s create an account</p>
                            <p className="text-xs text-neutral-600 mt-1">Save your chat history, share chat, and personalize your experience.</p>
                        </div>
                        <div className="w-full">
                            <Button styling="primary" onClick={goToSignIn} content="Sign in" className="w-full text-sm font-medium !py-2" />
                            <Button styling="link" variant="link" onClick={() => { }} content="Create account" className="w-full text-sm font-medium !py-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Sidebar