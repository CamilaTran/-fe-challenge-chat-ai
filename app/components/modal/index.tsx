import './styles.scss'
import { notoFont } from "@/app/ui/fonts"

import CloseIcon from "@/app/ui/icon/close-icon";
import { Modal as ModalAntd, ModalProps as ModalAntdProps } from "antd"

interface ModalProps extends ModalAntdProps {
    children: React.ReactNode;
    className?: string

}

const Modal = ({ children, className = '', ...props }: ModalProps) => {
    return (
        <ModalAntd centered {...props} className={`${notoFont.className} ${className}`} closeIcon={props.closeIcon ?? <CloseIcon />}>
            {children}
        </ModalAntd>
    )
}

export default Modal