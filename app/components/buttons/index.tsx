"use client";

import { Button as ButtonAntd, ButtonProps as ButtonAntdProps } from "antd";
import { notoFont } from "@/app/ui/fonts";

interface ButtonProps extends ButtonAntdProps {
    styling: "primary" | "secondary" | "link";
    className?: string;
}

const types = {
    "primary": "!bg-indigo-700 hover:!bg-indigo-800 text-white border-none !shadow-none !px-4 !py-[9px]",
    "secondary": "bg-secondary text-white !border !border-neutral-200 !text-neutral-900 hover:!bg-neutral-50 !bg-white shadow-md !shadow-none !px-4 !py-[9px]",
    "link": "!bg-white !text-indigo-700 hover:!text-indigo-800 !shadow-none !px-0 !py-0 !border-none"
}


const Button = ({ content, className, styling, ...props }: ButtonProps) => {
    return <ButtonAntd
        {...props}
        type="primary"
        className={`!text-center !h-auto !font-medium !text-base !rounded ${notoFont.className} ${className} ${types?.[styling] ?? ""}`}
    >
        {content}
    </ButtonAntd>;
}

export default Button;