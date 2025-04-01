interface SidebarChipProps {
    title: string;
    icon: (color: string) => React.ReactNode;
    onClick: () => void;
    isSelected?: boolean;
}

const SidebarChip = ({ title, icon, onClick, isSelected = true }: SidebarChipProps) => {

    return (<div className={`cursor-pointer flex items-center gap-3 p-1.5 my-1 ${isSelected ? "rounded bg-neutral-50" : ""}`} onClick={onClick}>
        {icon(isSelected ? "#4f46e5" : "#525252")}
        <span className={`${isSelected ? "!text-indigo-700 " : ""} font-medium text-sm text-neutral-600 truncate max-w-[150px]`}>{title}</span>
    </div>)
}

export default SidebarChip