import LogoIcon from "@/app/ui/icon/logo"

const ResponseMessageError = () => {
    return (
        <div className="bg-white rounded-lg border border-neutral-200 p-[11px] flex gap-3 lg:max-w-[528px] max-w-full my-3">
            <LogoIcon />
            <div className="bg-red-50 text-sm text-red-600 rounded-full py-1 px-2">An error occured. Please try again.</div>
        </div>
    )
}

export default ResponseMessageError