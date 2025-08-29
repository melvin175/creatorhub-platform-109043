This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Supabase Integration

IMPORTANT: Supabase Configuration Required

1. In your Supabase Dashboard:
   - Go to Authentication > URL Configuration
   - Set Site URL to your production domain (e.g., https://creatorhub.app)
   - Add these Redirect URLs:
     * http://localhost:3000/**
     * https://creatorhub.app/**

2. Environment Variables:
   - Set NEXT_PUBLIC_SUPABASE_URL
   - Set NEXT_PUBLIC_SUPABASE_KEY
   - Optional: NEXT_PUBLIC_SITE_URL (for production)
   - Optional: NEXT_PUBLIC_VERCEL_URL (on Vercel)

3. Frontend utilities:
   - Auth helpers in `src/utils/auth.ts`
   - Supabase client in `src/utils/supabase.ts`
   - URL helper in `src/utils/getURL.ts`
   - Auth callback route at `src/app/auth/callback/page.tsx`
   - Auth error route at `src/app/auth/error/page.tsx`

4. Usage example:
```ts
import { signInWithOAuth } from '@/src/utils/auth'
await signInWithOAuth('github')
```

5. Notes:
   - Never hardcode redirect URLs; always use `getURL()`.
   - Include both localhost and production URLs in Supabase auth config.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
