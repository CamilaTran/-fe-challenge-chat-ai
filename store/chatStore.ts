import { create } from "zustand";
import { Chat, ChatDetail } from "@/types/openAI";
import { persist } from "zustand/middleware";

interface ChatState {
  list: Chat[];
  current: ChatDetail | null;
  setList: (list: Chat[]) => void;
  setCurrent: (chat: ChatDetail | null) => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      list: [],
      current: null,
      setList: (list: Chat[]) => set({ list }),
      setCurrent: (chat) => set({ current: chat }),
    }),
    {
      name: "chat-storage",
    }
  )
);
