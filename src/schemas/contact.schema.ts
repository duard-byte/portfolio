import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must not exceed 1000 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
