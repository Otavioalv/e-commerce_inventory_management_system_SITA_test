import { useFormContext } from "react-hook-form";

import type {UseFormRegisterReturn, FieldValues, Path } from "react-hook-form";
import type { ReactNode } from "react";

interface IFormFieldProps<T extends FieldValues> {
    name: Path<T>;
    children: (props: {
        register: UseFormRegisterReturn<Path<T>>;
        error?: string;
    }) => ReactNode;
}

export function FormField<T extends FieldValues>({name, children}: IFormFieldProps<T>) {
    const {
        register,
        formState: { errors },
    } = useFormContext<T>();

    const error = errors[name]?.message as string | undefined;

    return (
        <>
            {children({
                register: register(name),
                error,
            })}
        </>
    );
}