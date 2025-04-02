"use client"
import Button from "../buttons"
import Modal from "../modal/client-modal"

const LeaveConfirmModal = () => {
    return (
        <Modal
            open={false}
            title="Save your chat history?"
            className="!md:w-[343px] w-full"
            footer={
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Button content="Create account" onClick={() => { }} styling="secondary" className="flex-1" />
                        <Button content="Sign in" onClick={() => { }} styling="primary" className="flex-1" />
                    </div>
                    <Button content="Leave anyway" onClick={() => { }} styling="link" />
                </div>
            }
        >
            <p className="font-sm text-neutral-600 font-normal">Your chat history will be lost. Sign in or create an account to keep your data.</p>
        </Modal>
    )
}

export default LeaveConfirmModal