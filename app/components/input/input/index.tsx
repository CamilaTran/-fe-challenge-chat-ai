import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd'
import { notoFont } from '@/app/ui/fonts'
import './styles.scss'

interface InputProps extends InputPropsAntd {
    className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
    return (
        <InputAntd
            {...props}
            className={`!h-auto !border-1 !border-neutral-200 hover:!border-indigo-700 focus-within:!border-indigo-700 focus-within:ring-2 focus-within:ring-indigo-50 focus-within:!text-neutral-900 !bg-neutral-50 !rounded-lg text-sm !text-neutral-500 !py-2 !px-3 focus-within:!shadow-none caret-neutral-500 ${notoFont.className} ${className}`}
            size='middle'
        />
    )
}

export default Input;   