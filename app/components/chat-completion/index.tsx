import QuestionMessage from "../message/question-message"
import ResponseMessageError from "../message/response-message-error"

const ChatCompletion = () => {
    return (
        <div className="">
            <QuestionMessage text="What is the capital of France?" />
            <ResponseMessageError />
        </div>
    )
}

export default ChatCompletion;