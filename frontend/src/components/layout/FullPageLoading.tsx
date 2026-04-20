
interface IFullPageLoadingProps {
    isLoading: boolean,
}

export const FullPageLoading = ({isLoading}:IFullPageLoadingProps) => {
    if(!isLoading) return null;

    return (
        <div className=" fixed inset-0 flex flex-row gap-2 items-center justify-center bg-black/30 backdrop-blur-xs ">
            <div className="w-6 h-6 rounded-full bg-gray-900 animate-bounce"></div>
            <div
                className="w-6 h-6 rounded-full bg-gray-900 animate-bounce [animation-delay:-.3s]"
            ></div>
            <div
                className="w-6 h-6 rounded-full bg-gray-900 animate-bounce [animation-delay:-.5s]"
            ></div>
        </div>
    );
}
