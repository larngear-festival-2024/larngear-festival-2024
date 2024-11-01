import z from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_BASE_URL: z.string(),
});

export const envClientSchema = envSchema.parse({
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});
