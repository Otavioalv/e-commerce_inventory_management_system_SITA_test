import { z } from "zod";

// Valid product id
export const productIdSchema = z.coerce.number().int().positive();
