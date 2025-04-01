interface HistoryIconProps {
    color?: string;
}

const HistoryIcon = ({ color = "#525252" }: HistoryIconProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.6667 18.3333H3.33333C2.8731 18.3333 2.5 17.9602 2.5 17.5V2.49996C2.5 2.03973 2.8731 1.66663 3.33333 1.66663H16.6667C17.1269 1.66663 17.5 2.03973 17.5 2.49996V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333ZM15.8333 16.6666V3.33329H4.16667V16.6666H15.8333ZM6.66667 5.83329H13.3333V7.49996H6.66667V5.83329ZM6.66667 9.16663H13.3333V10.8333H6.66667V9.16663ZM6.66667 12.5H10.8333V14.1666H6.66667V12.5Z"
                fill={color} />
        </svg>

    )
}

export default HistoryIcon;