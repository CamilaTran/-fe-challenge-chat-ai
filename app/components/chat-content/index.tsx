"use client"

import { useState } from "react";
import EmptyChatContent from "../empty-chat-content";
// components
import SearchInput from "../input/search-input";
import ChatCompletion from "../chat-completion";
import Loading from "../loading";


const ChatContent = () => {
    const [isLogin] = useState(true)
    const [isLoading] = useState(true)
    return (
        <div className="relative lg:max-w-[712px] mx-auto flex flex-col justify-between lg:h-screen lg:px-16 lg:pt-20 pb-6 md:px-8 pt-12 px-4">
            <div className="lg:max-h-[calc(100vh-90px-24px)] overflow-scroll">
                {isLogin ? <ChatCompletion /> : <EmptyChatContent />}
            </div>
            <SearchInput />
            {isLoading && <Loading />}
        </div>
        // <div className="lg:px-16 lg:pt-20 pb-6 md:px-18 pt-12 px-4 lg:h-screen flex flex-col justify-between">
        //     <div className="lg:max-w-[712px]">
        //         {isLogin ? <ChatCompletion /> : <EmptyChatContent />}
        //         <SearchInput />
        //     </div>

        // </div>
        // <div className="lg:px-16 lg:pt-20 pb-6 md:px-18 pt-12 px-4 lg:h-screen flex flex-col justify-between">
        //     <div className="relative lg:max-w-[712px] flex flex-col justify-between h-screen w-auto">
        //         {/* {isLogin ? <ChatCompletion /> : <EmptyChatContent />} */}

        //         <SearchInput />
        //         {/* {isLoading && <Loading />} */}
        //     </div>
        // </div>
    )
}

export default ChatContent;