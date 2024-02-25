import { z } from "zod";

export const nameSchema = z.string().min(3);
export const emailSchema = z.string().email();
export const passwordSchema = z.string().min(6).max(20);
export const userSchema = z.object({ 
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    code: z.string().optional().nullable()
});