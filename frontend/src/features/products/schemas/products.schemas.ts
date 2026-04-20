
import { z } from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .min(3, "Very short name"),
    description: z
        .string()
        .min(5, "Very short description"),

    price: z
        .string()
        .nonempty("Mandatory price")
        .refine(val => /^\d+(\.\d{1,2})?$/.test(val), {
            message: "Price must be a valid number (ex: 10.50)",
        })
        .refine(val => Number(val) > 0, {
            message: "Price must be greater than zero",
        }),

    stockQuantity: z
        .string()
        .nonempty("Mandatory stock")
        .refine(val => /^\d+$/.test(val), {
            message: "Mandatory stock",
        })
        .refine(val => Number(val) >= 0, {
            message: "Mandatory stock",
        }),
});


export type ProductFormData = z.infer<typeof productSchema>;
