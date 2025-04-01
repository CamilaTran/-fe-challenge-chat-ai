"use client"
// icon 
import MailIcon from "@/app/ui/icon/mail-icon";
import QuickstartPrompt from "../quickstart-prompt";
import PenIcon from "@/app/ui/icon/pen-icon";
import NotebookIcon from "@/app/ui/icon/notebook-icon";
import ChatIcon from "@/app/ui/icon/chat-icon";

// components
import SearchInput from "../input/search-input";


const ChatContent = () => {
    return (
        <div className="lg:px-16 lg:pt-20 pb-6 md:px-18 pt-12 px-4 lg:h-screen flex flex-col justify-between">
            <div className="lg:max-w-[712px] mx-auto flex flex-col justify-between h-screen">
                <div>
                    <div>
                        <span className="sm:text-3xl text-xl font-medium font-lg">Hey, I’m Chat AI. </span>
                        <span className="sm:text-3xl text-xl text-neutral-600">Your AI assistant and <br /> companion for any occasion.</span>
                    </div>
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 pt-20">
                        <QuickstartPrompt tittle="Draft email" description="Generate email for any occasion you need." onClick={() => { }} icon={<MailIcon />} background="bg-indigo-50" />
                        <QuickstartPrompt tittle="Write an Essay" description="Generate essay for any occasion you need." onClick={() => { }} icon={<PenIcon />} background="bg-green-50" />
                        <QuickstartPrompt tittle="Planning" description="Plan for any occasion, from holiday to family." onClick={() => { }} icon={<NotebookIcon />} background="bg-fuchsia-50" />
                        <QuickstartPrompt tittle="Assistant" description="Become your personal assistant. Helping you." onClick={() => { }} icon={<ChatIcon />} background="bg-amber-50" />
                    </div>
                </div>

                <SearchInput />

            </div>
        </div>
    )
}

export default ChatContent;