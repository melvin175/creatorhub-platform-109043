import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string

if (!url || !anonKey) {
  // eslint-disable-next-line no-console
  console.warn(
    'Supabase: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_KEY is not set. Frontend auth/data features will not work until set.'
  )
}

export const supabase = createClient(url ?? '', anonKey ?? '')
