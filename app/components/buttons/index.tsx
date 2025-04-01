"use client";

import { Button as ButtonAntd } from "antd";
import { notoFont } from "@/app/ui/fonts"

import './styles.scss';

interface ButtonProps {
    type: "primary" | "default" | "dashed" | "text" | "link";
    onClick: () => void;
    className?: string;
    content?: string | React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    variant?: "outline" | "filled" | "text" | "link"
}
const types = {
    primary: "bg-white text-black hover:bg-indigo-800 !bg-indigo-700 border-none",
    default: "",
    dashed: "",
    text: "bg-white text-indigo-700",
    link: "bg-white text-indigo-700 hover:bg-neutral-50",
}

const variants = {
    outline: "border border-neutral-200 text-neutral-900 hover:bg-neutral-50 !py-[8.5px] !px-[13px] shadow-subtle bg-white hover:!bg-neutral-50 !text-neutral-900 hover:!text-neutral-950 hover:!border-neutral-200",
    filled: "!border-none !bg-indigo-700 !text-white hover:!bg-indigo-800",
    text: "",
    link: "",

}
const Button = ({ content, className, variant = 'filled', ...props }: ButtonProps) => {
    return <ButtonAntd
        {...props}
        className={`!h-auto !px-0 !py-0 rounded disabled:!bg-neutral-100 disabled:!text-neutral-400 disabled:!border-none ${notoFont.className} ${className} ${types?.[props.type] ?? ""} ${variants?.[variant]}`}
    >
        {content}
    </ButtonAntd>;
}

export default Button;