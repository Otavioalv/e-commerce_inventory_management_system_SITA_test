import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
    "py-3 px-5 rounded-md font-bold transition-all cursor-pointer text-sm",
    {
        variants: {
            variant: {
                default: "bg-gray-900 text-white active:bg-gray-900/80 hover:bg-gray-900/90",
                outline: "border border-gray-900 text-gray-700 hover:bg-gray-100 active:bg-gray-200",
                disabled: "bg-gray-200 text-gray-400",
                icon: "p-2 bg-transparent hover:bg-gray-100 hover:bg-gray-100 active:bg-gray-200",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, ...props }: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant }), className)}
            {...props}
        />
    );
}