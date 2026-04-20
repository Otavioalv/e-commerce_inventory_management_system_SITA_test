import type { PropsWithChildren } from "react";
import { MainContainer } from "./MainContainer";

type TContainerProps = PropsWithChildren;

export const Container = ({children}: TContainerProps) => {
    return (
        <div className="px-3 flex flex-col gap-5 lg:px-50 md:px-20 lg:items-center">
            <MainContainer>
                {children}
            </MainContainer>
        </div>
    );
}