import { FormProvider } from "react-hook-form";


import type { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";
import type { PropsWithChildren } from "react";



interface IFormProps<T extends FieldValues> extends PropsWithChildren {
    onSubmit: SubmitHandler<T>;
    methods: UseFormReturn<T>;
}


export function Form<T extends FieldValues>({ children, onSubmit, methods }: IFormProps<T>) {
    return (
        <FormProvider {...methods}>
            <form 
                onSubmit={methods.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 border border-gray-300 rounded-sm p-4"
            >
                {children}
            </form>
        </FormProvider>
    );
}