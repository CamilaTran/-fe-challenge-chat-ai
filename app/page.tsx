'use client'
import ChatContent from "@/app/components/chat-content";
import Navigation from "@/app/components/navigation";
import Sidebar from "@/app/components/sidebar";
import APIKeyModal from "./components/api-key-modal";
// import LeaveConfirmModal from "./components/leave-confirm-modal";
import { useState } from "react";


export default function Home() {
  const [isOpenAPIModal, setIsOpenAPIModal] = useState<boolean>(false)
  // const [isOpenLeaveModal, setIsOpenLeaveModal] = useState<boolean>(false)



  const onOpenAPIModal = () => {
    setIsOpenAPIModal(true);
  }

  const onCloseAPIModal = () => {
    setIsOpenAPIModal(false);
  }

  // const onOpenLeaveModal = () => {
  //   setIsOpenLeaveModa(true);
  // }

  // const onCloseLeaveModal = () => {
  //   setIsOpenAPIModal(false);
  // }


  return (
    <>
      <div className="">
        <div className="block lg:hidden">
          <Navigation />
        </div>
        <div className="flex">
          <div className="lg:block hidden">
            <Sidebar goToSignIn={onOpenAPIModal} />
          </div>
          <div className="lg:w-[calc(100vw-240px-64px-64px)] mx-auto">
            <ChatContent />
          </div>
        </div>
      </div>
      {/* <LeaveConfirmModal open={isOpenLeaveModal} onClose={onCloseLeaveModal}/> */}
      <APIKeyModal open={isOpenAPIModal} onClose={onCloseAPIModal} />
    </>
  );
}
