import HistoryIcon from "@/app/ui/icon/history-icon";
import SidebarChip from "../side-bar-chip";

interface HistoryTopicsProps {
    list: Array<string>;
}


const HistoryTopics = ({ list }: HistoryTopicsProps) => {
    return (
        <div>
            {
                list.map((item) => <SidebarChip title="How many people in SG in 2025" icon={(color) => <HistoryIcon color={color} />} onClick={() => { }} isSelected={false} key={item} />)
            }
        </div>
    )
}

export default HistoryTopics