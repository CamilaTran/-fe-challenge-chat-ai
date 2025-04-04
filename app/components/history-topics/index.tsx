import HistoryIcon from "@/app/ui/icon/history-icon";
import SidebarChip from "../side-bar-chip";
import { Chat } from "@/types/openAI";

interface HistoryTopicsProps {
    list: Array<Chat>;
}


const HistoryTopics = ({ list }: HistoryTopicsProps) => {
    return (
        <div className="overflow-y-auto max-h-[480px]">
            {
                list.map((item) => <SidebarChip title={item.object} icon={(color) => <HistoryIcon color={color} />} onClick={() => { }} isSelected={false} key={item.id} />)
            }
        </div>
    )
}

export default HistoryTopics