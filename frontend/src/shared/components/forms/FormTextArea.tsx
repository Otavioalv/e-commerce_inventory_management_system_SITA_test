import type { TextareaHTMLAttributes } from "react";

interface IFormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

export function FormTextArea({ label, error, ...props }: IFormTextAreaProps) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="font-bold text-sm text-gray-700">{label}</label>
            <textarea 
                {...props} 
                className={`
                    border border-gray-300 p-2 rounded-sm min-h-60 
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
