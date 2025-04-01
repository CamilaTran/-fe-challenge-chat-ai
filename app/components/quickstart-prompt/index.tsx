"use client";

import React from "react";

interface QuickstartPromptProps {
    tittle: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
    background?: string;
}

const QuickstartPrompt = ({ tittle, description, icon, onClick, background = 'white' }: QuickstartPromptProps) => {
    return <div className="rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 p-4 text-left hover:cursor-pointer" onClick={onClick}>
        <div className={`w-10 h-10 rounded-lg ${background} relative`}>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                {icon}
            </div>
        </div>
        <p className="text-sm font-semibold mt-6 text-neutral-900">{tittle}</p>
        <p className="text-xs text-neutral-600 mt-2 text-neutral-600">{description}</p>
    </div>
}

export default QuickstartPrompt;