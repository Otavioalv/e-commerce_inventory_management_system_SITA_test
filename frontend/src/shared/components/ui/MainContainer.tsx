
import type { PropsWithChildren } from "react";

type TMainContainerProps = PropsWithChildren;

export const MainContainer = ({children}: TMainContainerProps) => {
    return (
        <div className="w-full flex flex-col gap-5 max-w-300">
            {children}
        </div>
    );
}