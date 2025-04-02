import ChatContent from "@/app/components/chat-content";
import Navigation from "@/app/components/navigation";
import Sidebar from "@/app/components/sidebar";
import APIKeyModal from "./components/api-key-modal";
import LeaveConfirmModal from "./components/leave-confirm-modal";


export default function Home() {
  return (
    <>
      <div className="">
        <div className="block lg:hidden">
          <Navigation />
        </div>
        <div className="flex">
          <div className="lg:block hidden">
            <Sidebar />
          </div>
          <div className="lg:w-[calc(100vw-240px-64px-64px)] mx-auto">
            <ChatContent />
          </div>
        </div>
      </div>
      <LeaveConfirmModal />
      <APIKeyModal />
    </>
  );
}
