import type { InputHTMLAttributes } from "react";


interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    error?: string;
}

export function FormInput({ label, id, error, ...props }: IFormInputProps) {
    return (
        <div className="flex flex-col gap-2 flex-1 min-w-0">
            <label
                 htmlFor={id}
                className="font-bold text-sm"
            >
                {label}
            </label>
            
            <input 
                id={id}
                {...props} 
                className={`
                    border border-gray-300 p-2 rounded-sm
                    ${error ? "border-red-500" : "border-gray-300"}
                `}
            />

            {error && 
                <span className="text-red-500 text-xs">
                    {error}
                </span>
            }
        </div>
    );
}

