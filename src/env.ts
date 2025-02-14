export const env = {
    DATABASE_URL: process.env.DATABASE_URL ?? "",
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY ?? "",
    NEXT_PUBLIC_API_URL: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? "",
};
