import Button from "../buttons";

const Login = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="border border-neutral-200 flex flex-col gap-4 rounded-lg bg-white p-4">
                <div>
                    <p className="text-sm font-medium text-neutral-900">Let’s create an account</p>
                    <p className="text-xs text-neutral-600 mt-1">Save your chat history, share chat, and personalize your experience.</p>
                </div>
                <div className="w-full">
                    <Button type="primary" onClick={() => { }} content="Sign in" className="w-full text-sm font-medium !py-2" />
                    <Button type="link" variant="link" onClick={() => { }} content="Create account" className="w-full text-sm font-medium !py-2" />
                </div>
            </div>
        </div>
    )
}

export default Login;