import PromptList from "../prompt-list";

const EmptyChatContent = () => {
    return (
        <div>
            <div>
                <span className="sm:text-3xl text-xl font-medium font-lg">Hey, I’m Chat AI. </span>
                <span className="sm:text-3xl text-xl text-neutral-600">Your AI assistant and <br /> companion for any occasion.</span>
            </div>
            <PromptList />
        </div>
    )
}


export default EmptyChatContent;