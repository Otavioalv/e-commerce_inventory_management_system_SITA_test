import type { PropsWithChildren } from "react";

type TContainerProps = PropsWithChildren;

export const Container = ({children}: TContainerProps) => {
    return (
        <div className="px-3 flex flex-col gap-5">
            {children}
        </div>
    );
}