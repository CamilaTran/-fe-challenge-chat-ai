import { Collapse as CollapseAntd, CollapseProps as CollapsePropsAntd } from "antd";
import { notoFont } from "@/app/ui/fonts";
import './styles.scss'

interface CollapseProps extends CollapsePropsAntd {
    className?: string;
}

const Collapse = ({ className, ...props }: CollapseProps) => {
    return (
        <CollapseAntd className={`${className} ${notoFont.className}`} {...props} />
    )
}

export default Collapse