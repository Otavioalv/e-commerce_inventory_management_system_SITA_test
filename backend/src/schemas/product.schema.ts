import { Product } from "@/types";
import { z } from "zod";

// Valid product id
export const productIdSchema = z.coerce.string().min(1);

// Valid product data
export const productCreateSchema:z.ZodType<Omit<Product, 'id'>> = z.object({
    name: z
        .string("Value must be characters")
        .min(1, "Name is required"),
    description: z
        .string("Value must be characters")
        .min(1, "Description is required"),
    price: z
        .number("Value must be numeric")
        .positive("Price must be greater than 0"),
    stockQuantity: z
        .number("Value must be numeric")
        .int("Stock quantity must be an integer")
        .nonnegative("Stock quantity cannot be negative"),
});
