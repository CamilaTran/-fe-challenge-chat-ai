import QuickstartPrompt from "../quickstart-prompt"

// icons
// icon 
import PenIcon from "@/app/ui/icon/pen-icon";
import MailIcon from "@/app/ui/icon/mail-icon";
import ChatIcon from "@/app/ui/icon/chat-icon";
import NotebookIcon from "@/app/ui/icon/notebook-icon";

const PromptList = () => {
    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 pt-20">
            <QuickstartPrompt tittle="Draft email" description="Generate email for any occasion you need." onClick={() => { }} icon={<MailIcon />} background="bg-indigo-50" />
            <QuickstartPrompt tittle="Write an Essay" description="Generate essay for any occasion you need." onClick={() => { }} icon={<PenIcon />} background="bg-green-50" />
            <QuickstartPrompt tittle="Planning" description="Plan for any occasion, from holiday to family." onClick={() => { }} icon={<NotebookIcon />} background="bg-fuchsia-50" />
            <QuickstartPrompt tittle="Assistant" description="Become your personal assistant. Helping you." onClick={() => { }} icon={<ChatIcon />} background="bg-amber-50" />
        </div>
    )
}

export default PromptList