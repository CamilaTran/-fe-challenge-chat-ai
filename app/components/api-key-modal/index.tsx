"use client"
import FAQs from "../faqs";
import Button from "../buttons";
import Input from "../input/input";
import Modal from "../modal/client-modal";
import { Form, FormProps } from "antd";

import ArrowIcon from "@/app/ui/icon/arrow-icon";
import { authenticationAPI } from "@/services/authenticationAPI";
import { useChatStore } from "@/store/chatStore";


interface APIKeyModalProps {
    open: boolean;
    onClose: () => void
}

type FieldType = {
    apiKey: string
};

const APIKeyModal = (props: APIKeyModalProps) => {
    const [form] = Form.useForm<FieldType>();
    const setList = useChatStore(state => state.setList)

    const goToSetupKey = () => {
        window.open(process.env.NEXT_PUBLIC_API_KEY_OPENAI_SETUP_URL as string, '_blank');
    }

    const onSubmitKey: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const rs = await authenticationAPI.verifyKey(values.apiKey);
            setList(rs.data);
            props.onClose();
        } catch {
                form.setFields([
                    {
                        name: 'apiKey',
                        errors: ['Incorrect API key provided. You can find your API key at https://platform.openai.com/account/api-keys.'],
                    },
                ]);
           
        }
    }

    return <Modal
        {...props}
        className="md:!w-[576px] w-full md:px-0 mx-4"
        closeIcon={false}
        footer={null}
    >
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <span className="text-center font-semibold text-2xl">Enter Your OpenAI API Key</span>
                <p className="text-center text-sm text-neutral-600">You need an OpenAI API Key to use this app. Your API Key will be stored locally on your browser.</p>
            </div>
            <Form form={form} initialValues={{ apiKey: "" }} onFinish={onSubmitKey}>
                <Form.Item
                    name="apiKey"
                    rules={[
                        { required: true, message: 'Please enter your API key' },
                        // {
                        //     pattern: /^sk-$/,
                        //     message: 'Invalid API key. Check that it is still valid',
                        // },
                    ]}
                >
                    <Input placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" className="!text-center" />
                </Form.Item>

                <div className="flex flex-col gap-3">
                    <Button
                        onClick={goToSetupKey}
                        styling="link"
                        content="Go to Open AI to get your API key"
                        icon={<ArrowIcon />}
                    />
                    <div className="flex gap-3 ">
                        <Button content="Cancel" onClick={props.onClose} styling="secondary" className="flex-1" />
                        <Button content="Save" styling="primary" className="flex-1" htmlType="submit" />
                    </div>
                </div>
            </Form>
        </div>

        <div className="mt-12">
            <FAQs />
        </div>



    </Modal>
}

export default APIKeyModal;