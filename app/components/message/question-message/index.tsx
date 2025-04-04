
interface QuestionMessageProps {
    text: string;
}

const QuestionMessage = ({ text }: QuestionMessageProps) => {
    return (
        <div className="bg-gray-50 lg:max-w-[449px] max-w-[286px] p-3 rounded-lg my-3">
            <p className="text-sm">{text}</p>
        </div>
    )
}

export default QuestionMessage