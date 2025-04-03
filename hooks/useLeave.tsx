import { useEffect } from "react"

interface UseLeaveProps {
    onUnload: (e: BeforeUnloadEvent) => void;
}

const useLeave = ({ onUnload }: UseLeaveProps) => {
    useEffect(() => {
        window.addEventListener('beforeunload', onUnload);
        return () => {
            window.removeEventListener('beforeunload', onUnload);
        }
    }, [onUnload])
}


export default useLeave