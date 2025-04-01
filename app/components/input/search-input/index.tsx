import { useState } from "react";
// components
import Button from "../../buttons";
import Input from "../input";
import SendIcon from "@/app/ui/icon/send-icon";

const SearchInput = () => {
    const [searchText, setSearchText] = useState<string>("");
    
    return (
        <div className="w-full flex items-center gap-2">
            <Input placeholder="Ask me anything..." value={searchText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearchText(e.target.value) }} />
            <Button content="Submit" icon={<SendIcon color={searchText ? "white" : "#A3A3A3"} />} onClick={() => { }} type="primary" className="!px-[14px] !py-[9.5px] !shadow-none !border-none" disabled={!searchText} />
        </div>
    )
}

export default SearchInput;