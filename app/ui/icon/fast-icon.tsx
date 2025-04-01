interface FastIconProps {
    color?: string;
}

const FastIcon = ({ color = "#4338CA" }: FastIconProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.8333 7.5H17.5L9.16668 20V12.5H3.33334L10.8333 0V7.5ZM9.16668 9.16667V6.01719L6.27699 10.8333H10.8333V14.4953L14.3858 9.16667H9.16668Z"
                fill={color} />
        </svg>

    )
}

export default FastIcon;