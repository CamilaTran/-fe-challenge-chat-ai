import Collapse from "../collapse"
import AddIcon from "@/app/ui/icon/add-icon"
import MinusIcon from "@/app/ui/icon/minus-icon"

import { questionsList } from "./data"


const FAQs = () => {
    const items = questionsList.map((item, index) => ({
        key: index.toString(),
        label: item.question,
        children: (
            <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-700">
                {item.answers.map((answer, answerIndex) => (
                    <li key={`answer-${index}-${answerIndex}`} className="text-base text-neutral-600 font-normal">{answer}</li>
                ))}
            </ul>
        ),
    }));


    return (
        <div>
            <p className="text-center font-semibold text-xl mb-6">FAQ about API Key</p>
            <div className="lg:max-h-[336px] max-h-[390px] overflow-scroll">
                <Collapse
                    items={items}
                    expandIconPosition="end"
                    expandIcon={({ isActive }) => isActive ? <MinusIcon /> : <AddIcon />}
                />
            </div>
        </div>
    )
}

export default FAQs