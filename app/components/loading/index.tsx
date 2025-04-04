import Image from "next/image";

const Loading = () => {
    return (
        <div className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-6 text-center flex flex-col items-center justify-center">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                    style={{ "boxShadow": "0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10)" }}>
                    <Image
                        src="/spinning.svg"
                        alt="loading"
                        width={30}
                        height={30}
                        className=""
                    />
                </div>
                <span className="font-medium text-xl text-neutral-900">Loading...</span>
                <p className="text-neutral-900 mt-2">Fetching data, it may take a while</p>
            </div>
        </div>
    )
}

export default Loading;