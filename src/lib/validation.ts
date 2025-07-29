import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .refine(
      (msg) => !msg.includes('<script'),
      'Message contains potentially harmful content'
    ),
  // Honeypot field - should be empty
  website: z.string().max(0, 'Spam detected').optional()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;