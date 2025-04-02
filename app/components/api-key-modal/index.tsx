"use client"
import FAQs from "../faqs";
import Button from "../buttons";
import Input from "../input/input";
import Modal from "../modal/client-modal";

import ArrowIcon from "@/app/ui/icon/arrow-icon";


const APIKeyModal = () => {
    return <Modal
        open={false}
        className="md:!w-[576px] w-full md:px-0 mx-4"
        closeIcon={false}
        footer={null}
    >
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <span className="text-center font-semibold text-2xl">Enter Your OpenAI API Key</span>
                <p className="text-center text-sm text-neutral-600">You need an OpenAI API Key to use this app. Your API Key will be stored locally on your browser.</p>
            </div>

            <Input placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" className="!text-center" />

            <div className="flex flex-col gap-3">
                <Button
                    onClick={() => { }}
                    styling="link"
                    content="Go to Open AI to get your API key"
                    icon={<ArrowIcon />}
                />
                <div className="flex gap-3 ">
                    <Button content="Cancel" onClick={() => { }} styling="secondary" className="flex-1" />
                    <Button content="Save" onClick={() => { }} styling="primary" className="flex-1" />
                </div>
            </div>


        </div>
        <div className="mt-12">
            <FAQs />
        </div>



    </Modal>
}

export default APIKeyModal;